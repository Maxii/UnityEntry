// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: ICameraTargetable.cs
//  Interface containing values needed by a gameobject that is a target for camera movement.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LOG
#define DEBUG_LEVEL_WARN
#define DEBUG_LEVEL_ERROR

namespace CodeEnv.Master.Common {


    /// <summary>
    /// Interface containing values needed by a gameobject that is a target for camera movement.
    /// </summary>
    public interface ICameraTargetable {

        bool IsTargetable { get; }

        float MinimumCameraViewingDistance { get; }

    }
}

