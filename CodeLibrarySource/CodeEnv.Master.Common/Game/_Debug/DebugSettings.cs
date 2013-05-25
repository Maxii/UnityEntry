// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: DebugSettings.cs
// Parses DebugSettings.xml used to provide externalized values to DebugSettings.cs Properties.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LEVEL_WARN
#define DEBUG_LEVEL_ERROR
#define DEBUG_LOG

using System.Xml;
namespace CodeEnv.Master.Common {

    /// <summary>
    /// Parses DebugSettings.xml used to provide externalized values to DebugSettings.cs Properties.
    /// </summary>
    public sealed class DebugSettings : AValues<DebugSettings> {

        protected override string DocumentName {
            get { return "DebugSettings"; }
        }

        private bool _enableFpsReadout;
        public bool EnableFpsReadout {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _enableFpsReadout;
            }
            set { _enableFpsReadout = value; }
        }

        private bool _unlockAllItems;
        public bool UnlockAllItems {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _unlockAllItems;
            }
            set { _unlockAllItems = value; }
        }

        private bool _disableEnemies;
        public bool DisableEnemies {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _disableEnemies;
            }
            set { _disableEnemies = value; }
        }

        private bool _disableGui;
        public bool DisableGui {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _disableGui;
            }
            set { _disableGui = value; }
        }

        private bool _makePlayerInvincible;
        public bool MakePlayerInvincible {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _makePlayerInvincible;
            }
            set { _makePlayerInvincible = value; }
        }

        private bool _disableAllGameplay;
        public bool DisableAllGameplay {
            get {
                if (!isPropertyValuesInitialized) {
                    InitializePropertyValues();
                }
                return _disableAllGameplay;
            }
            set { _disableAllGameplay = value; }
        }

        private DebugSettings() {
            Initialize();
        }

        protected override bool ValidateDocument(XmlDocument doc) {
            // TODO
            return true;
        }

        public override string ToString() {
            return new ObjectAnalyzer().ToString(this);
        }

    }
}

