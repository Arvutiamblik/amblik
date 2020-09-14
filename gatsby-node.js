exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/404",
    toPath: "/",
    isPermanent: true,
    statusCode: 404,
  });
};
