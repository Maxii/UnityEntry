// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: SceneLevel.cs
// COMMENT - one line to give a brief idea of what the file does.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

namespace CodeEnv.Master.Common {

    public enum SceneLevel {
        // Having None as the default requires that there is a None scene set to 0
        // in build settings. When built into a player, None becomes the initial scene
        // which doesn't work of course
        //None = 0,
        //IntroScene = 1,
        //GameScene = 2

        IntroScene = 0,
        GameScene = 1

    }
}

