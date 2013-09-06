CONTEXTUAL  - CONTEXT MENU ADD-ON FOR NGUI

Welcome to Contextual! If you're wondering where to go next, here are some suggestions:

TUTORIALS AND DOCUMENTATION

We urge you to at least read the Getting Started page and the first Tutorial. Contextual is a fairly
powerful tool, but that power comes with some complexity. Tutorials and documentation are located on
our web site:

	http://contextual.brazenlegions.com

If you've installed the Examples (highly recommended!) load any of the scenes in Contextual/Examples and
hit Play to see Contextual in action. The example and tutorial scenes are included with the package and
their contents should help you get started.

GETTING HELP

Having a problem?

First: You did remember to install NGUI, right? Contextual is an add-on for NGUI and won't work without it.
You can get NGUI from the Unity Asset Store.

Now that that's out of the way...

Solutions to common problems will be posted in the FAQ and checking there first might save you some time:

 	http://contextual.brazenlegions.com/FAQ

Otherwise, send us an email and we'll help:

	support@brazenlegions.com
	
We welcome suggestions for improvements and new features too.

REVISION HISTORY

Version 1.1.2 - 24 June 2013

- Added onHide delegate and hideFunction event function fields to CtxMenu, CtxObject, CtxMenubutton and
CtxPopup. As the name suggests, this event is fired after the menu is closed and can be used to detect
when the user closes a menu without actually making a selection. Note though that the event is fired
regardless of whether or not a selection is made. You'll need to distinguish those situations yourself.

- Changed behavior of selection tracking to work better on touch-screen displays. Specifically the
highlight may now be dragged before the mouse/touch is released, and the menu selection event will be
triggered for the last item that was highlighted. This works for submenus as well.

Version 1.1.1 - 10 April 2013

- Fixed a bug in CtxMenu which would result in the menu being positioned incorrectly when placed in
a nontrivial NGUI transform hierarchy.

- Added limited ability to change the visible state of an open context menu. The UpdateVisibleState()
API in CTXMenu will attempt to synchronize the visible state of an opened menu with the current item
state. Currently this works ONLY for checkmark and disable states, as the other menu states would
require that the menu metrics be recomputed. If you use the SetChecked() and SetDisabled() APIs to
toggle these states then this is handled for you automatically.

- Updated Tutorial7a scene to demonstrate visible state changes. See InitializedSphereHandler.cs to
see the code changes.

Version 1.1.0 - 26 February 2013

- Added event forwarding to CtxObject. CtxObject now has its own Event Receiver, Function Name and Show
Function fields which allow events to be forwarded to another game object. CtxObject also exposes
onSelection and onShow delegates which C# programmers can make use of. This is now mostly consistent with
the behavior of other contextual classes. Hooray for orthognality!

- The Handles Menu toggle has been removed from CtxObject. CtxObject now always sends event messages to
its own game object unless an Event Receiver has been specified.

NOTE: the above change may cause some issues with some uses of CtxObject. If after updating to this
version you seem to be missing events from CtxObject, the solution is probably to fill out the Function
Name field in CtxObject as it will no longer automatically pass through events from CtxMenu if it
doesn't have a specified function to call. Apologies for any inconvenience.

- Added CtxPopup class. CtxPopup allows you to attach a context menu to any NGUI widget which will appear
when that widget is clicked. Its inspector is similar to CtxMenuButton but, unlike CtxMenuButton, it
doesn't really care what type of widget it is attached to, so long as a collider is present so that it
can receive mouse/touch events.

- Added menu item manipulation functions to CtxObject, CtxMenuButton and CtxPopup (e.g. IsChecked(),
SetChecked(), IsDisabled() etc.) Since each of these types may have its own list of menu items, it
stands to reason that each needs its own item manipulation APIs.

- Fixed a bug in CtxMenu which would occasionally throw a null reference exception when attempting to
open a submenu.

- Added Example3 scene which demonstrates the use of CtxPopup as well as dynamic construction of menu
item lists.

- Added Tutorial7a and Tutorial7b scenes in support of the recently added Tutorial 7, which discusses a
number of scripting issues. Check it out at:

http://contextual.brazenlegions.com/tutorials/tutorial-7

Version 1.0.4 - 18 February 2013

- Fixed an issue with CtxMenuButton where the button state didn't reflect the current selection state
when the selection was changed via code.

- Updated CtxMenu to track recent NGUI changes (in particular the addition of the GetAtlasSprite() API.)
You may need to update NGUI for this version.

Version 1.0.2 - 30 January 2013

- Fixed some issues with the CtxMenu.Show() API. Specifically there were situations where the menu was not
the 'selected' NGUI object on Show(), which caused it to be hidden immediately. This fix allowed removal
of some redundant code in CtxObject.cs. Show() should work more reliably when called from user code.

- Added onShow delegate to CtxMenu, CtxMenuButton and CtxObject. This delegate is called prior to the menu
being opened and is an opportunity for user code to configure the menu before it is shown.

- Added showFunction to CtxMenu and CtxMenuButton, which holds the name of a message that is sent to the
eventReceiver just before the menu is shown. This is equivalent to the onShow delegate and is provided for
JavaScript compatibility.

Version 1.0.1 - 23 January 2013

- Fixed some issues with exceptions in the inspector UI.

- Fixed problem with context menu Z-positioning in some cases with hierarchical panel arrangements. The
menu root now uses the same Z position as the CtxMenu object, so this is now under user control.

Version 1.0 - 16 January 2013

- Initial version release.