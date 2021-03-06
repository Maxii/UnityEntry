﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: AGuiPopupListBase.cs
//  An abstract base class for popup lists used in the Gui, pre-wired with Tooltip functionality.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LOG
#define DEBUG_WARN
#define DEBUG_ERROR

// default namespace

using CodeEnv.Master.Common;
using CodeEnv.Master.GameContent;

/// <summary>
/// An abstract base class for popup lists used in the Gui, pre-wired with Tooltip functionality.
/// </summary>
public abstract class AGuiPopupListBase : GuiTooltip {

    protected UIPopupList popupList;

    protected override void Awake() {
        base.Awake();
        popupList = gameObject.GetSafeMonoBehaviourComponent<UIPopupList>();
        ConfigurePopupList();
        InitializeListValues();
        InitializeSelection();
        // don't receive events until initializing is complete
        EventDelegate.Add(popupList.onChange, OnPopupListSelectionChange);
        //popupList.onSelectionChange += OnPopupListSelectionChange;
    }

    /// <summary>
    /// Virtual method that does any required configuration of the popupList
    /// prior to initializing list values or the selection.
    /// </summary>
    protected virtual void ConfigurePopupList() {
        //popupList.textLabel = gameObject.GetSafeMonoBehaviourComponentInChildren<UILabel>();
        // popupList.textLabel is no longer needed as the same can be achieved by choosing a
        // On[Value]Change notification targeting a label's SetCurrentSelection method.
        // If your code was list.textLabel = myLabel, change it to: EventDelegate.Add(list.onChange, lbl.SetCurrentSelection);
        UILabel label = gameObject.GetSafeMonoBehaviourComponentInChildren<UILabel>();
        EventDelegate.Add(popupList.onChange, label.SetCurrentSelection);
    }

    /// <summary>
    /// Abstract method to initialize the values in the popupList.
    /// </summary>
    protected abstract void InitializeListValues();

    /// <summary>
    /// Abstract method for initialiings the PopupList selectionName.
    /// </summary>
    /// <remarks>Called in the Awake sequence as UIPopupList will make
    /// a selectionName change to item[0] in Start() if not already set.
    /// </remarks>
    protected abstract void InitializeSelection();

    protected virtual void OnPopupListSelectionChange() { }

    /// <summary>
    /// Method called when the popupList selection is changed. The default implementation does nothing.
    /// </summary>
    /// <arg name="item">The name of the selection.</arg>
    //protected virtual void OnPopupListSelectionChange(string item) { }

    // IDisposable Note: No reason to remove Ngui event currentListeners OnDestroy() as the EventListener or
    // Delegate to be removed is attached to this same GameObject that is being destroyed. In addition,
    // execution is problematic as the gameObject may have already been destroyed.

}

