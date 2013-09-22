﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: RequiredPrefabs.cs
// Singleton container that holds some of the prefabs gauranteed to be used in this startScene. 
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

// default namespace

using System;
using CodeEnv.Master.Common;
using UnityEngine;

/// <summary>
/// Singleton container that holds prefabs that are gauranteed to be used in this startScene.
/// </summary>
/// <remarks>
/// I think these are a real reference to the prefab in the Project view, not a separate instance
/// clone of the Prefab in the startScene. As such, they must be Instantiated before use.
/// </remarks>
public class RequiredPrefabs : AMonoBehaviourBaseSingletonInstanceIdentity<RequiredPrefabs> {

    public SphereCollider UniverseEdgePrefab;
    public Transform CameraDummyTargetPrefab;
    public GuiTrackingLabel GuiTrackingLabelPrefab;
    public VelocityRay VelocityRay;
    public HighlightCircle HighlightCircle;

    protected override void Awake() {
        base.Awake();
        if (TryDestroyExtraCopies()) {
            return;
        }
    }

    /// <summary>
    /// Ensures that no matter how many scenes this Object is
    /// in (having one dedicated to each sscene may be useful for testing) there's only ever one copy
    /// in memory if you make a scene transition.
    /// </summary>
    /// <returns><c>true</c> if this instance is going to be destroyed, <c>false</c> if not.</returns>
    private bool TryDestroyExtraCopies() {
        if (_instance && _instance != this) {
            D.Log("{0}_{1} found as extra. Initiating destruction sequence.".Inject(this.name, InstanceID));
            Destroy(gameObject);
            return true;
        }
        else {
            DontDestroyOnLoad(gameObject);
            _instance = this;
            return false;
        }
    }

    public override string ToString() {
        return new ObjectAnalyzer().ToString(this);
    }

}


