router.post("/forgotPassword", userValidator.checkmail(), async function (req, res, next) {
    const resultvalidate = validationResult(req);
    if (resultvalidate.errors.length > 0) {
      ResHelper.RenderRes(res, false, resultvalidate.errors);
      return;}