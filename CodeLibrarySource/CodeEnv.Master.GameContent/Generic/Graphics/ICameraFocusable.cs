﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: ICameraFocusable.cs
// Interface designating the game object it is attached too as an
// object that can be selected as the camera's focus, thereby causing the 
// camera to automatically approach and view the object. Game objects that
// are selected as the camera's focus can also be orbited by the camera.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LOG
#define DEBUG_WARN
#define DEBUG_ERROR

namespace CodeEnv.Master.GameContent {

    /// <summary>
    ///  Interface designating the game object it is attached too as an
    /// object that can be selected as the camera's focus, thereby causing the 
    /// camera to automatically approach and view the object. Game objects that
    /// are selected as the camera's focus can also be orbited by the camera.
    /// </summary>
    public interface ICameraFocusable : ICameraTargetable {

        bool IsFocus { get; set; }

        bool IsRetainedFocusEligible { get; }

        float OptimalCameraViewingDistance { get; }

    }
}

