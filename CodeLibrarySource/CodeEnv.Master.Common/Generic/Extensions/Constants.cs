// --------------------------------------------------------------------------------------------------------------------
// <copyright>
// Copyright © 2012 Strategic Forge
//
// Email: jim@strategicforge.com
// </copyright> 
// <summary> 
// File: Constants.cs
// COMMENT - one line to give a brief idea of what the file does.
// </summary> 
// -------------------------------------------------------------------------------------------------------------------- 

namespace CodeEnv.Master.Common {

    using System.IO;

    /// <summary>
    /// Static Class of common constants. 
    /// </summary>
    public static class Constants {

        // Composite Formatting for Argument Index 0      see  http://msdn.microsoft.com/en-us/library/txafckwd.aspx 

        /// <summary>
        /// Three significant digits.
        /// </summary>
        public const string FormatNumber_Default = "{0:G3}";

        /// <summary>
        /// Minimum 1 digit.
        /// </summary>
        public const string FormatInt_1DMin = "{0:0}";
        /// <summary>
        /// Minimum 2 digits.
        /// </summary>
        public const string FormatInt_2DMin = "{0:00}";
        /// <summary>
        /// Zero decimal places, rounded.
        /// </summary>
        public const string FormatFloat_0Dp = "{0:0.}";   // "{0:0.}"?
        /// <summary>
        /// Up to one decimal place, rounded.
        /// </summary>
        public const string FormatFloat_1DpMax = "{0:0.#}";
        /// <summary>
        /// Two decimal places, rounded.
        /// </summary>
        public const string FormatFloat_2Dp = "{0:0.00}"; // read as for Argument Index 0 : Leading/Trailing zeros = 0 . Decimal places = 2
        /// <summary>
        /// Up to two decimal places, rounded.
        /// </summary>
        public const string FormatFloat_2DpMax = "{0:0.##}";    // read as for Argument Index 0 : Leading/Trailing zeros = 0 . Decimal places = up to 2
        /// <summary>
        /// Up to four decimal places, rounded.
        /// </summary>
        public const string FormatFloat_4DpMax = "{0:0.####}";

        // Common Numeric Formatting  see http://msdn.microsoft.com/en-us/library/dwhawy9k.aspx
        public const string CurrencyNumericFormat = "C02";
        public const string PercentNumericFormat = "P00";

        public const string GameDateFormat = "{0}.{1:D3}";
        public const string GamePeriodYearsFormat = "{0} years, {1:D3} days";
        public const string GamePeriodNoYearsFormat = "{0:D3} days";

        // Common Strings
        public static string UserCurrentWorkingDirectoryPath {
            get { return System.Environment.CurrentDirectory; }
        }

        public static string NewLine {
            get { return System.Environment.NewLine; }
        }
        public const string Empty = "";
        public const string Space = " ";
        public const string Period = ".";
        public const string Tab = "\t";
        public const string Comma = ",";
        public const string DoubleQuote = "\"";
        public const string SingleQuote = "'";
        public const string Underscore = "_";
        public const string Ellipsis = "...";
        public const string SemiColon = ";";
        public const string Colon = ":";

        // Switch Strings
        public const string GodMode = "/GodMode";

        // Common Characters     
        public static char FileSeparator {
            get { return Path.DirectorySeparatorChar; }
        }

        public static char PathSeparator {
            get { return Path.PathSeparator; }
        }
        public const char CommaDelimiter = ',';
        public const char SpaceDelimiter = ' ';
        public const char PeriodDelimiter = '.';

        // Numbers and algebraic signs
        public const string PositiveSign = "+";
        public const string NegativeSign = "-";

        public const int MinusOne = -1;
        public const int Zero = 0;
        public const int One = 1;

        public const long ZeroL = 0L;

        public const float ZeroF = 0.0F;
        public const float ZeroPercent = 0.0F;
        public const float OneF = 1.0F;
        public const float OneHundredPercent = 1.0F;

        public const int OneKilobyte = 1024;
        public const int OneMegabyte = 1048576;

        public const int DegreesPerRotation = 360;
        public const int DegreesPerOrbit = 360;

        // For monetary calculations
        public const int MoneyDecimalPlaces = 2;
        public const decimal ZeroMoney = 0.00M;

        // Time conversion factors
        public const long NanosecondsPerMillisecond = 1000000L;
        public const long NanosecondsPerSecond = 1000000000L;
        public const long MicrosecondsPerSecond = 1000000L;
        public const long MillisecondsPerSecond = 1000L;
        public const int SecondsPerMinute = 60;
        //public const int MinutesPerHour = 60;
        //public const int HoursPerDay = 24;

        // Booleans
        public const bool Pass = true;
        public const bool Fail = false;

        public const bool Won = true;
        public const bool Lost = false;
    }
}

