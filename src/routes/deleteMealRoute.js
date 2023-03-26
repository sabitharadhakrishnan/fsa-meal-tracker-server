export const deleteMealRoute = {
  path: "/ingredients/:id",
  method: "delete",
  handler: async (req, res) => {
    res.send("Deleting meals (not implemented yet)");
  },
};
