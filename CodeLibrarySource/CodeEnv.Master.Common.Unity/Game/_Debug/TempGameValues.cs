﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: TempGameValues.cs
// Static class of common constants specific to the Unity Engine.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

namespace CodeEnv.Master.Common.Unity {

    using UnityEngine;

    public static class TempGameValues {

        public static readonly Vector3 UniverseOrigin = Vector3.zero;

        public const int StartingGameYear = 2700;
        public const int DaysPerGameYear = 100;
        public const float GameDaysPerSecond = 1.0F;

        public const int MinFleetTrackingLabelShowDistance = 50;
        public const int MaxFleetTrackingLabelShowDistance = 300;

        public const int MinSystemTrackingLabelShowDistance = 100;
        public const int MaxSystemTrackingLabelShowDistance = 2500;

        public const int MaxSystemAnimateDistance = 1000;
        public const int MaxShipAnimateDistance = 100;



        public const float InjuredHealthThreshold = 0.80F;
        public const float CriticalHealthThreshold = 0.40F;

    }
}


