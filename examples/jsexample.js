importPackage(org.bukkit.event);
importPackage(org.bukkit.event.player);
importPackage(java.util.logging);
/* Here we give the plugin description file. Same format as for normal plugins (except in JSON, not YAML). Refer to Bukkit docs for this.
 * This is REQUIRED! 
 */
SCRIPT_PDF = {
	"name" : "jsexample", // SHOULD BE THE SCRIPT FILENAME WITHOUT EXTENSION. Or things may break.
	"version" : "4",
	"commands" : {
			"jses" : { "description" : "JsExampleScript Example Command", "usage" : "/<command>" }
		}
	// "main" is not required; it'll be automatically added as "" if not provided... but if you provide it anyway, nothing will happen
	};
// New: change the variable name for the 3 preset variables.
// If not specified, the values below are used as default.
HELPER_VARIABLE_NAME = "helper";
PLUGIN_VARIABLE_NAME = "plugin";
SERVER_VARIABLE_NAME = "server";

/* Here are the onEnable and onDisable functions.
 * These aren't required, but then exceptions would occur when they are called.
 */
function onEnable() { 
    helper.log(Level.INFO, "jsexample loaded!"); 
    /* And here is how you register/handle events. */
    helper.registerEvent(PlayerJoinEvent, EventPriority.LOWEST, "onPlayerJoin");
    /* And so on. Refer to Bukkit docs for event types and priorities */
}
function onDisable() { helper.log(Level.INFO, "jsexample unloaded!"); }

/* Here is how you handle Events */
/* Note that method names are case-sensitive */
function onPlayerJoin(eventArgs)
{
    eventArgs.getPlayer().sendMessage("jsexample says hi, " + eventArgs.getPlayer().getName());
}

/* Here is how you handle Commands */
/* Please remember to define commands in the PDF above */
/* This method is the same as an onCommand method for normal plugins; refer to Bukkit docs */
function onCommand(/*CommandSender*/ sender, /*Command*/ command, /*String*/ commandLabel, /*String[]*/ args)
{
	var clu = commandLabel.toLowerCase()
    if(clu == "jses")
        sender.sendMessage("You called /jses.");
    return true; // Return true if valid command; false otherwise

}
/* Final remarks:
 * Never try to access helper, plugin or server outside a function! They are only defined immediately before enable is called, so if you try to access them, your script will not load.
 */
