// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: GameDate.cs
// COMMENT - one line to give a brief idea of what the file does.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

namespace CodeEnv.Master.Common.Unity {

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using CodeEnv.Master.Common;
    using CodeEnv.Master.Common.LocalResources;
    using UnityEngine;

    public class GameDate : IGameDate {
        // IMPROVE StringBuilder?
        private int daysPerYear = GameValues.DaysPerGameYear;
        private float gameDaysPerSecond = GameValues.GameDaysPerSecond;
        private int startingGameYear = GameValues.StartingGameYear;

        public int DayOfYear { get; internal set; }

        public int Year { get; internal set; }

        public string FormattedDate {
            get {
                return "{0}.{1:D3}".Inject(Year, DayOfYear);
            }
        }

        internal void SyncDateToGameClock(float gameClock) {
            int elapsedDays = Mathf.FloorToInt(gameClock * gameDaysPerSecond);
            Year = startingGameYear + Mathf.FloorToInt(elapsedDays / daysPerYear);
            DayOfYear = 1 + (elapsedDays % daysPerYear);
        }
    }

}

