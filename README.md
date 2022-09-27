# World War Ways Node Maker #
This project is a companion to the World War Ways application, and is a simple website to create all the nodes and other data used for the drawing and pathfinding in World War Ways.
I made this just to make my life easier when getting data together, so there's no automatic loading of data or changing maps; that has to be done with a commmand or within the code itself.

The controls print to the console on startup, but for easy reference:
- C to clear all Nodes and Connections
- D to delete the selected Node or Connection
- ESC to cancel any current selection
- H to change Connection difficulty (easy,medium,hard)
- L to load
- M to change modes (node,connection,view)
- P to run test pattern
- S to save
- T to change Node type (road,offroad,track)

In Node Creation Page Mode, Ctrl + Arrows moves the node position by single pixels in a direction

Can only create Nodes or Connections in their respective modes
- Click on the map to create a Node
- Shift + click to create an equidistant line of Nodes from the last selected Node
- Click on a Node to select it
- Click on a second Node in Connection mode to create a bidirectional connection
- Shift + click on a second Node in Connection mode to create a one-way connection

Toggles to the Node type or Connection difficulty persist globally, unless there is a current selection