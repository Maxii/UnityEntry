// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 - 2013 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: GuiCursorHudTextFactory_Fleet.cs
// Factory that makes GuiCursorHudText and IColoredTextList instances for Fleets.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

#define DEBUG_LOG
#define DEBUG_LEVEL_WARN
#define DEBUG_LEVEL_ERROR

namespace CodeEnv.Master.Common.Unity {

    using CodeEnv.Master.Common;

    /// <summary>
    /// Factory that makes GuiCursorHudText and IColoredTextList instances for Fleets.
    /// </summary>
    public class GuiCursorHudTextFactory_Fleet : AGuiCursorHudTextFactory {

        public GuiCursorHudTextFactory_Fleet(FleetData data) : base(data) { }

        /// <summary>
        /// Makes a strategy instance of IColoredTextList. Only the keys that use data from this FleetData are implemented
        /// in this derived class.
        /// </summary>
        /// <param name="intelLevel">The intel level.</param>
        /// <param name="key">The key.</param>
        /// <returns></returns>
        /// <exception cref="System.NotImplementedException"></exception>
        public override IColoredTextList MakeInstance_ColoredTextList(IntelLevel intelLevel, GuiCursorHudDisplayLineKeys key) {
            FleetData data = _data as FleetData;
            switch (key) {
                case GuiCursorHudDisplayLineKeys.Speed:
                    return new ColoredTextList<float>("{0:0.#}", data.Speed, data.MaxSpeed);  // fleet will always display speed, even if zero
                case GuiCursorHudDisplayLineKeys.Composition:
                    // TODO                        
                    return (data.Composition != string.Empty) ? new ColoredTextList_String(data.Composition) : new ColoredTextList();
                case GuiCursorHudDisplayLineKeys.CompositionDetails:
                    // TODO
                    return (data.Composition != string.Empty) ? new ColoredTextList_String(data.Composition) : new ColoredTextList();
                default:
                    return base.MakeInstance_ColoredTextList(intelLevel, key);
            }
        }

        public override string ToString() {
            return new ObjectAnalyzer().ToString(this);
        }
    }
}

