// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: DynamicObjects.cs
// Singleton for easy access to DynamicObjects folder in scene.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

// default namespace

using System;
using CodeEnv.Master.Common;
using UnityEngine;
using UnityEditor;

/// <summary>
/// Singleton for easy access to DynamicObjects folder in scene.
/// </summary>
public class DynamicObjects : MonoBehaviour {

    #region Custom MonoBehaviour Singleton Pattern
    private static DynamicObjects instance = null;
    public static DynamicObjects Instance {
        get {
            if (instance == null) {
                // Instance is required for the first time, so look for it
                instance = GameObject.FindObjectOfType(typeof(DynamicObjects)) as DynamicObjects;
                if (instance == null) {
                    // no instance created yet, so create one
                    GameObject dynamicObjectsFolder = GameObject.Find(GameValues.DynamicObjectsFolderName);
                    if (dynamicObjectsFolder != null) {
                        // if our destination folder exists, add our newly created instance to it
                        instance = dynamicObjectsFolder.AddComponent<DynamicObjects>();
                    }
                    else {
                        // DynamicObjects folder isn't in the scene, so create it
                        Debug.LogWarning("No DynamicObjects folder found, so creating one.");
                        dynamicObjectsFolder = new GameObject(GameValues.DynamicObjectsFolderName, typeof(DynamicObjects));
                        instance = dynamicObjectsFolder.GetComponent<DynamicObjects>();
                        if (instance == null) {
                            Debug.LogError("Problem during the creation of {0}.".Inject(typeof(DynamicObjects).ToString()));
                        }
                    }
                }
                instance.Initialize();
            }
            return instance;
        }
    }

    void Awake() {
        // If no other MonoBehaviour has requested Instance in an Awake() call executing
        // before this one, then we are it. There is no reason to search for an object as we must be attached to it.
        if (instance == null) {
            instance = this as DynamicObjects;
            instance.Initialize();
        }
    }

    // Make sure Instance isn't referenced anymore
    void OnApplicationQuit() {
        instance = null;
    }
    #endregion

    private void Initialize() {
        // do any required initialization here as you would normally do in Awake()
    }

    /// <summary>
    /// Gets the DynamicObjects folder.
    /// </summary>
    /// <value>
    /// The folder.
    /// </value>
    public static Transform Folder {
        get {
            if (Instance.gameObject.name != GameValues.DynamicObjectsFolderName) {
                Debug.LogError("Expecting folder {0} but got {1}.".Inject(GameValues.DynamicObjectsFolderName, Instance.gameObject.name));
            }
            return Instance.transform;
        }
    }

    public override string ToString() {
        return new ObjectAnalyzer().ToString(this);
    }


}


