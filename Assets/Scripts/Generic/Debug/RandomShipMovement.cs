// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: RandomShipMovement.cs
// COMMENT - one line to give a brief idea of what this file does.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LEVEL_LOG
#define DEBUG_LEVEL_WARN
#define DEBUG_LEVEL_ERROR

// default namespace

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;
using CodeEnv.Master.Common;
using CodeEnv.Master.Common.Unity;

/// <summary>
/// COMMENT 
/// </summary>
public class RandomShipMovement : MonoBehaviourBase {

    private Rigidbody _rigidbody;

    void Awake() {
        _rigidbody = gameObject.GetComponent<Rigidbody>();
    }

    void Start() {
        // Keep at a minimum, an empty Start method so that instances receive the OnDestroy event
    }

    void Update() {

    }

    void FixedUpdate() {
        _rigidbody.AddRelativeForce(Vector3.forward * 1000);
    }

    public override string ToString() {
        return new ObjectAnalyzer().ToString(this);
    }

}

