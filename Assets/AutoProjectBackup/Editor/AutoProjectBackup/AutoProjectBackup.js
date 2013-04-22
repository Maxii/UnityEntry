// -----------------------------------------
// AutoProjectBackup v1.02 (11-20-2012)
// Copyright 2011 Raik Remus (aka Raik Zerbster) and monozoo
// All rights reserved
// -----------------------------------------

class AutoProjectBackup extends EditorWindow {
	
	var Pfad = Application.dataPath;
	var newPfad2 = Pfad.Replace("/Assets", "");
	var subtract : String;   
	var subtract2 : String; 
	var subtract3 : String;
	var subtract4 : String;
	var dirName : String;
	var dirName2 : String;
	var dirName3 : String;
	var di : System.IO.DirectoryInfo;
	var diDir : System.IO.DirectoryInfo[];
	var files : System.IO.FileInfo[];
	var checkInit = 0;
	var groupEnabled = false;
	var newPfad : String = newPfad2;
	var destPfad : String = newPfad2;
	var destie : String = newPfad2;
	var backPfad : String = newPfad2;
	var check = 0;
	var switchCheck : int = 1;
	var switchCheck2 : int = 0;
	var switchCompare : int;
	var switchCompare2 : boolean = false;
	var incrBack : int = 3;
	var nameBack : String = "AutoBack";
	var customGuiStyle : GUIStyle;
	var	customGuiStyle2 : GUIStyle;
	var	customGuiStyle3 : GUIStyle;
	var isPause : boolean = true;
	var timeRemaining : float; 
	var addTime = EditorApplication.timeSinceStartup + 300;
	var status : String = "";
	var minuteString : String[] = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
	var minuteInt : int[] = [5,10,15,20,25,30,35,40,45,50,55];
	var selectMin : int = 5;
	var hourString : String[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
	var hourInt : int[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
	var selectHour : int = 1;
	var switchTime : String[] = ["Minutes", "Hours"];
	var switchSelect : int;
	var selectThis : int = 5;
	var incrOption1 : int = 2;
	var incrOption2 : int = 0;
	var incrString1 : String[] = ["none", "1 Digit Serial Number", "2 Digit Serial Number", "3 Digit Serial Number", "4 Digit Serial Number", "Date (mmddyy)", "Date (mmdd)", "Date (yyyymmdd)", "Date (yymmdd)", "Date (yyddmm)", "Date (ddmmyy)", "Date (ddmm)", "Time (hhmm)", "Time (hhmmss)"]; 
	var incrString2 : String[] = ["none", "1 Digit Serial Number", "2 Digit Serial Number", "3 Digit Serial Number", "4 Digit Serial Number", "Date (mmddyy)", "Date (mmdd)", "Date (yyyymmdd)", "Date (yymmdd)", "Date (yyddmm)", "Date (ddmmyy)", "Date (ddmm)", "Time (hhmm)", "Time (hhmmss)"]; 
	var incrString11: String[] = ["none", "D1", "D2", "D3", "D4", "MMddyy", "MMdd", "yyyyMMdd", "yyMMdd", "yyddMM", "ddMMyy", "ddMM", "hhmm", "hhmmss"];
	var incrStringS1 : String;
	var incrStringS2 : String;
	var incrStringSum1 : String;
	var incrStringSum2 : String;
	var incrInt1 : int = 1;
	var incrInt2 : int = 1;
	var incrInt3 : int = 1;
	var example : String;
	var example2 : String;
	var enable : boolean = false;
	var progressString : String;
	var thisString : String[] = minuteString;
	var thisInt : int[] = minuteInt;
	var timeSet : int;
	var manualCopyPath : String;
	var autoCopyPath : String;
	var fortschritt : float;
	static var timeStr : String;
	var checkSubtract : String;
	var removeInt32 : int;
	var removeString : String;
	var removeInt32Back : int;
	var removeStringBack : String;
	
	var manualBackupThread : System.Threading.Thread;
	var errorMessage : String;
	var impossible : boolean;
	var autoBackupThread : System.Threading.Thread;
	var checkTimer : boolean;
	var checkTimerManual : boolean = false;
	var editorTime = EditorApplication.timeSinceStartup;
	var buttonString : String = "Manual Backup Now";
   
    
        
    function Awake(){
		if (checkInit < 1){
			if (Application.platform == RuntimePlatform.WindowsEditor){
				newPfad = newPfad2.Replace("/", "\\");
				destPfad = newPfad;
			} else {
				   	newPfad = newPfad2;
					destPfad = newPfad;
			}
			selectThis = selectMin;
			thisString = minuteString;
			thisInt = minuteInt;
			dirName = System.IO.Path.GetDirectoryName(destPfad);
			subtract = destPfad.Replace(dirName, "");
			dirName3 = System.IO.Path.GetDirectoryName(backPfad);
			subtract4 = backPfad.Replace(dirName3, "");
			backPfad = destPfad;
			checkInit = checkInit +1;
		}
    	if (switchSelect == 0){
        	timeSet = selectThis * 60;       	
			addTime = EditorApplication.timeSinceStartup + selectThis * 60;
		}	
		if (switchSelect == 1){
			timeSet = selectThis * 60;
			addTime = EditorApplication.timeSinceStartup + selectThis * 3600;
		}
    }	

    
        
    function OnInspectorUpdate() {
    
    	
        Repaint();
        
    	fortschritt = timeRemaining/timeSet;
    	
    	if (impossible == true){
    		fehler();
    	}
    	
       	editorTime = EditorApplication.timeSinceStartup;
    	
    	if (!isPause) {
  			doTime();
   		}
	
	} 
   
    
    @MenuItem ("Window/Auto Project Backup")
    
    static function Init () {
   		var window : AutoProjectBackup = EditorWindow.GetWindowWithRect (AutoProjectBackup, Rect(100, 100, 500, 315), false, "Project Backup");
    }
    


    
       
    function OnGUI () {
    	
    	// some guistyles to control text alignment
    	
    	customGuiStyle = new GUIStyle("textfield");
		customGuiStyle.alignment = TextAnchor.MiddleRight;
   		customGuiStyle2 = new GUIStyle(); 
   		customGuiStyle2.alignment = TextAnchor.MiddleRight;
   		customGuiStyle3 = new GUIStyle(); 
   		customGuiStyle3.alignment = TextAnchor.MiddleLeft;
		
		// layout Maual Backup
		
		GUILayout.Label ("Manual Backup", EditorStyles.boldLabel);
		GUILayout.BeginVertical ("box");
		var newPfadWidth = GUI.skin.label.CalcSize(new GUIContent(newPfad));
			if ( newPfadWidth.x > position.width - 118) {
        		EditorGUILayout.TextField ("Source", newPfad, customGuiStyle2);
			} else {
				EditorGUILayout.TextField ("Source", newPfad, customGuiStyle3);
			}
	    GUILayout.BeginHorizontal ();
       	var destPfadWidth = GUI.skin.label.CalcSize(new GUIContent(destPfad));
        	if ( destPfadWidth.x > position.width - 193) {
            	destie = EditorGUILayout.TextField ("Destination", destPfad, customGuiStyle);
        	} else {
        		destie = EditorGUILayout.TextField ("Destination", destPfad);
        	}
       	destPfad = destie;
       		if (destPfad != ""){
       			dirName = System.IO.Path.GetDirectoryName(destPfad);
    			subtract = destPfad.Replace(dirName, "");
    			subtract2 = destPfad.Replace(newPfad, "");
    				if (Application.platform == RuntimePlatform.WindowsEditor){
	 					removeInt32 = destPfad.LastIndexOf("\\");
             			removeString = destPfad.Remove(removeInt32);
             		} else {
						removeInt32 = destPfad.LastIndexOf("/");
             			removeString = destPfad.Remove(removeInt32);
    			   	}
       		}
            if(GUILayout.Button ("Change", GUILayout.Width(70))) {
        		GUI.SetNextControlName ("destie");
        		GUI.FocusControl ("destie");  
            	var Destpath = EditorUtility.SaveFolderPanel("Change Directory", "", "Folder");
            		if (Destpath != ""){
             			destPfad = Destpath + subtract;
             				if (Application.platform == RuntimePlatform.WindowsEditor){
	 							destPfad = destPfad.Replace("/", "\\");
             				}
             			destie=destPfad;
             			dirName = System.IO.Path.GetDirectoryName(destPfad);
    					subtract = destPfad.Replace(dirName, "");
             		} 
            }
        GUILayout.EndHorizontal ();
        GUILayout.BeginHorizontal ();
		incrOption1 = EditorGUILayout.Popup("Increment", incrOption1, incrString1, GUILayout.Height(20));
		incrOption2 = EditorGUILayout.Popup(incrOption2, incrString2, GUILayout.Height(20));
        GUILayout.EndHorizontal ();
        incrStringS1 = incrString11[incrOption1];
        incrStringS2 = incrString11[incrOption2];
        	if (incrOption1 == 0){
        		incrStringSum1 = "";
        	} else if (incrOption1 > 0 && incrOption1 < 5){
        		incrStringSum1 = "_" + incrInt1.ToString(incrStringS1);
        	}
         	else {
        		incrStringSum1 = "_" + System.DateTime.Now.ToString(incrStringS1);
        	}
        	if (incrOption2 == 0){
        		incrStringSum2 = "";
        	} else if (incrOption2 > 0 && incrOption2 < 5){
        		incrStringSum2 = "_" + incrInt3.ToString(incrStringS2);
        	}
         	else {
        		incrStringSum2 = "_" + System.DateTime.Now.ToString(incrStringS2);
        	}
        example=destie + incrStringSum1 + incrStringSum2;
        var exampleWidth = GUI.skin.label.CalcSize(new GUIContent(example));
        	if ( exampleWidth.x > position.width - 118) {
            	 EditorGUILayout.TextField("Example", example, customGuiStyle2);
        	} else {
        		 EditorGUILayout.TextField("Example", example, customGuiStyle3);
        	}	
	       	if(GUILayout.Button (buttonString, GUILayout.Height(40))) {
				if (checkTimerManual == true){
					EditorUtility.DisplayDialog("Manual Backup Already In Progress", "Please wait until backup is finished", "OK");	
				} else {
					checkTimerManual = true;
					buttonString = "Manual Backup in Progress";
					manualBackupThreadF();
				}
	       	}
		GUILayout.EndVertical ();
    	    	
    	// layout automatic backup
    	    	
    	groupEnabled = EditorGUILayout.BeginToggleGroup ("Auto Backup", groupEnabled);
    		if (groupEnabled == false){
    			enable = false;
    		}
        GUILayout.BeginVertical ("box", GUILayout.Height(130));
        GUILayout.BeginHorizontal ();
        var backPfadWidth = GUI.skin.label.CalcSize(new GUIContent(backPfad));
         	if ( backPfadWidth.x > position.width - 193) {
            	destieBack = EditorGUILayout.TextField ("Destination", backPfad, customGuiStyle);
         	} else {
         		destieBack = EditorGUILayout.TextField ("Destination", backPfad);
         	}
        backPfad=destieBack;
       		if (backPfad != ""){
       			dirName2 = System.IO.Path.GetDirectoryName(backPfad);
    			subtract3 = backPfad.Replace(newPfad, "");
    			dirName3 = System.IO.Path.GetDirectoryName(backPfad);
    			subtract4 = backPfad.Replace(dirName3, "");
    				if (Application.platform == RuntimePlatform.WindowsEditor){
	 					removeInt32Back = backPfad.LastIndexOf("\\");
             			removeStringBack = backPfad.Remove(removeInt32Back);
    				} else {
		    			removeInt32Back = backPfad.LastIndexOf("/");
        		     	removeStringBack = backPfad.Remove(removeInt32Back);
    				}
       		}
            if(GUILayout.Button ("Change", GUILayout.Width(70))) {
            	GUI.SetNextControlName ("destie");
        		GUI.FocusControl ("destie");  
           		var backPath = EditorUtility.SaveFolderPanel("Change Directory", "", "Folder");
            	if (backPath != ""){
            		destieBack = backPath + subtract4;
            		if (Application.platform == RuntimePlatform.WindowsEditor){
	 					destieBack = destieBack.Replace("/", "\\");
             		}
             		backPfad=destieBack;
             		dirName3 = System.IO.Path.GetDirectoryName(backPfad);
    				subtract4 = backPfad.Replace(dirName3, "");
            	}
            }	
		GUILayout.EndHorizontal ();
		GUILayout.BeginHorizontal ();
		nameBack = EditorGUILayout.TextField ("Name Suffix", nameBack);
		incrBack = EditorGUILayout.IntField("Number Of Backups", incrBack, GUILayout.Width(180));  
			if (incrBack < 1) {
				incrBack = 1;
			}
			if (incrBack > 100) {
				incrBack = 100;
			}
		GUILayout.EndHorizontal ();
		example2 = backPfad + "_" + nameBack + "_" + incrInt2.ToString("D3");
		var example2Width = GUI.skin.label.CalcSize(new GUIContent(example2));
         	if ( example2Width.x > position.width - 118) {
            	EditorGUILayout.TextField ("Example", example2, customGuiStyle2);
         	} else {
         		EditorGUILayout.TextField ("Example", example2, customGuiStyle3);
         	}
        GUILayout.BeginHorizontal ();
        selectThis = EditorGUILayout.IntPopup("Backup Every", selectThis, thisString, thisInt, GUILayout.Height(20));
        switchSelect = EditorGUILayout.Popup(switchSelect, switchTime, GUILayout.Height(20));
        selection();
        GUILayout.EndHorizontal ();	
       	EditorGUI.LabelField (Rect(9,264,10,20),"Status", "");
    	EditorGUI.ProgressBar(Rect(109,264,position.width - 118,20), fortschritt, progressString);  
    	enable = EditorGUI.Toggle(Rect(9,287,382,20),"Enable/Disable", enable);
    		if (enable){
    			if (enable !=switchCompare2 && switchSelect == 0){
					timeSet = selectThis * 60;
					addTime = EditorApplication.timeSinceStartup + selectThis * 60;
					switchCompare2=enable;
					switchCheck2 = switchCheck2 + 1;
				}	
				if (enable !=switchCompare2 && switchSelect == 1){
					timeSet = selectThis * 3600;
					addTime = EditorApplication.timeSinceStartup + selectThis * 3600;
					switchCompare2=enable;
					switchCheck2 = switchCheck2 - 1;
				} 
				if (checkTimer == true){
					progressString = "Auto Backup In Progress";
    			} else {			
    				progressString = "Time Until AutoBackup " + timeStr;
    			}
    			isPause=false;
    		} else {
    			fortschritt=0;
    			progressString = "AutoBackup Is Disabled";
    			isPause=true;
    			switchCompare2=false;
    		}
    	EditorGUILayout.EndToggleGroup ();
     	GUILayout.EndVertical ();
	}
}
    
    
    function manualBackupThreadF(){
    		manualCopyPath = destPfad + incrStringSum1 + incrStringSum2;
    		if(EditorApplication.isCompiling) {
    			EditorUtility.DisplayDialog("Project Is Compiling", "Please try again after compiling is finished.", "OK");
            	checkTimerManual = false;
            	buttonString = "Manual Backup Now";
            	return;
        	}
   			if (manualCopyPath == newPfad){
   				EditorUtility.DisplayDialog("Destination Cannot Be The Same As Source", "Please change the destination path.", "OK");
       			checkTimerManual = false;
       			buttonString = "Manual Backup Now";
       			return;
			}else if (destPfad == "" || destPfad == "/assets" || destPfad == "\\assets") {
				EditorUtility.DisplayDialog("You Have To Assign A Destination", "Please input destination path", "OK");
				checkTimerManual = false;
				buttonString = "Manual Backup Now";
				return;
			}else if (removeString == newPfad) {
				EditorUtility.DisplayDialog("You Cannot Backup Inside The Project Folder", "Please input different destination path", "OK");
				checkTimerManual = false;
				buttonString = "Manual Backup Now";
				return;
			}else if (System.IO.Directory.Exists(manualCopyPath)){
				var option = EditorUtility.DisplayDialog("Destination Already Exists", "Choose OK to overwrite or Cancel to change destination path", "OK", "Cancel");
				 	if (option != true){
				 		checkTimerManual = false;
						buttonString = "Manual Backup Now";
						return;
				 	}
			}
		manualBackupThread = new System.Threading.Thread(new System.Threading.ThreadStart(manualBackup));
    	manualBackupThread.IsBackground = true;
    	manualBackupThread.Start();
    	return;
    	    	
    }
    
      function autoBackupThreadF(){
    		autoCopyPath = backPfad + "_" + nameBack + "_" + incrInt2.ToString("D3");
			if(EditorApplication.isCompiling) {
            	Debug.LogWarning("Auto Project Backup: AutoBackup skipped because project is compiling.");
            	if (switchSelect == 0){
        			timeSet = selectThis * 60;       	
					addTime = EditorApplication.timeSinceStartup + selectThis * 60;
				}	
				if (switchSelect == 1){
					timeSet = selectThis * 60;
					addTime = EditorApplication.timeSinceStartup + selectThis * 3600;
				}
				checkTimer = false;	
            	return;
        	}
   			if (autoCopyPath == newPfad){
       			Debug.LogWarning("Auto Project Backup: AutoBackup disabled because destination path cannot be the same as source path.");
       			enable = false;
       			checkTimer = false;
       			return;
			}else if (backPfad == "" || backPfad == "/assets" || backPfad == "\\assets") {
				Debug.LogWarning("Auto Project Backup: AutoBackup disabled because destination path cannot be empty.");
				enable = false;
				checkTimer = false;
				return;
			}else if (removeStringBack == newPfad) {
				Debug.LogWarning("Auto Project Backup: AutoBackup disabled because destination path cannot be inside the source project folder.");
				enable = false;
				checkTimer = false;
				return;
			}

		autoBackupThread = new System.Threading.Thread(new System.Threading.ThreadStart(automaticBackup));
    	autoBackupThread.IsBackground = true;
    	autoBackupThread.Start();
    	return;
    	    	
    }
	
	////initiate manual backup
    
    function manualBackup(){
    	
    	di = new System.IO.DirectoryInfo(newPfad);
		diDir = di.GetDirectories("*.*", System.IO.SearchOption.AllDirectories);  
   		files = di.GetFiles("*.*", System.IO.SearchOption.AllDirectories);
   			for (i = 0; i < diDir.Length; i++) {
				var directories = diDir[i].ToString();
				dirneu = directories.Replace(newPfad, manualCopyPath);
					try {
						System.IO.Directory.CreateDirectory(dirneu);
					} catch (e) {
              			errorMessage = e.Message;
              			impossible = true;
              			checkTimerManual = false;
              			buttonString = "Manual Backup Now";
              			manualBackupThread.Abort();
        				return;
					} 
			}
			for (i = 0; i < files.Length; i++) {
				var filepfade : String =files[i].ToString();
            	var filepfadeneu : String = filepfade.Replace(newPfad, manualCopyPath);
              		try {
              			if (filepfade != newPfad + "\\Temp\\WindowsLockFile" && filepfade != newPfad + "\\Temp\\UnityLockfile"){ 
              				System.IO.File.Copy(filepfade, filepfadeneu, true);
              			}
              		} catch (e) {
              			
              			errorMessage = e.Message;
              			impossible = true;
              			checkTimerManual = false;
              			buttonString = "Manual Backup Now";
              			manualBackupThread.Abort();
        				return;
					} 
        	}
          	if (incrOption1 > 0 && incrOption1 < 5){
        		incrInt1 = incrInt1 + 1;
          	}
          	if (incrOption2 > 0 && incrOption2 < 5){
        		incrInt3 = incrInt3 + 1;
          	}
          	
          	checkTimerManual = false;
          	buttonString = "Manual Backup Now";
          	manualBackupThread.Abort();
          	return;
          	
          	
	}
	
	//initiate automatic backup
	
	function automaticBackup() {
				di = new System.IO.DirectoryInfo(newPfad);
    	diDir = di.GetDirectories("*.*", System.IO.SearchOption.AllDirectories);  
    	files = di.GetFiles("*.*", System.IO.SearchOption.AllDirectories);
			for (i = 0; i < diDir.Length; i++) {
				var directories = diDir[i].ToString();
				dirneu = directories.Replace(newPfad, autoCopyPath);
				try {
					System.IO.Directory.CreateDirectory(dirneu);
				} catch (e) {
              			Debug.LogWarning("Auto Project Backup: AutoBackup disabled because: " + e.Message);
              			enable = false;
              			checkTimer = false;
              			autoBackupThread.Abort();
        				return;
				} 
			}
			for (i = 0; i < files.Length; i++) {
				var filepfade : String =files[i].ToString();
           		var filepfadeneu : String = filepfade.Replace(newPfad, autoCopyPath);
           		try {
              		if (filepfade != newPfad + "\\Temp\\WindowsLockFile" && filepfade != newPfad + "\\Temp\\UnityLockfile"){ 
              			System.IO.File.Copy(filepfade, filepfadeneu, true);
              		}
              	} catch (e) {
              			Debug.LogWarning("Auto Project Backup: AutoBackup disabled because: " + e.Message);
              			enable = false;
              			checkTimer = false;
              			autoBackupThread.Abort();
        				return;
				} 
            }
			if (switchSelect == 0){
       			timeSet = selectThis * 60;       	
				addTime = editorTime + selectThis * 60;
			}	
			if (switchSelect == 1){
				timeSet = selectThis * 60;
				addTime = editorTime + selectThis * 3600;
			}	
        	isPause = false;
			if (incrInt2 == incrBack){
				incrInt2 = 1;
			} else {
				incrInt2 = incrInt2 + 1;
			}
			checkTimer = false;
			autoBackupThread.Abort();
			return;
	}
	
	// thread errormessage
	
	function fehler(){
		EditorUtility.DisplayDialog("An Error Occured", errorMessage, "OK");
		impossible = false;
		return;
	}
	
	//clockwork
    
	function doTime() {
		timeRemaining = addTime - EditorApplication.timeSinceStartup;
		displayTime();
			if (timeRemaining < 0) {
				timeRemaining = 0;
   				isPause = true;
   					if (checkTimer == false){
   						checkTimer = true;
   						autoBackupThreadF();
   					}
   			}
	}

	

	function displayTime(){
   		var hours   : int;	
   		var minutes : int;
   		var seconds : int;
   		minutes = (timeRemaining /60) % 60;
   		seconds = timeRemaining % 60;
   		hours = 	 ((timeRemaining /60) /60);
   		timeStr = hours.ToString("D2") + ":"; 
   		timeStr += minutes.ToString("D2") + ":";
   		timeStr += seconds.ToString("D2");
   	}

	//AutoBackup time settings
	
		
	function selection(){
		if (switchSelect == 0 && switchCheck == 0){
			selectThis = 5;
			thisString = minuteString;
			thisInt = minuteInt;
			switchCheck = switchCheck + 1;
		} 
		else if (switchSelect == 1 && switchCheck ==1){
			selectThis = 1;
			thisString = hourString;
			thisInt = hourInt;
			switchCheck = switchCheck - 1;
		}
		if (selectThis !=switchCompare && switchSelect == 0){
			timeSet = selectThis * 60;
			addTime = EditorApplication.timeSinceStartup + selectThis * 60;
			switchCompare=selectThis;
		}	
		if (selectThis !=switchCompare && switchSelect == 1){
			timeSet = selectThis * 3600;
			addTime = EditorApplication.timeSinceStartup + selectThis * 3600;
			switchCompare=selectThis;
		}	
	}	
