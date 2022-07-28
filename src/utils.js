const Content = require("./models");

const deleteContent = async (contentId) => {
  await Content.deleteOne({ _id: contentId });
};

const runProcess = async () => {
  const contentData = await Content.find();

  contentData.forEach(async (item) => {
    let currentTime = new Date().getTime();
    let difference = currentTime - item.createdAt.getTime();
    let resultInMinutes = Math.round(difference / 60000);

    if (resultInMinutes >= item.expiration) {
      console.log("found match");
      // await item.delete();
      await deleteContent(item._id);
    }
  });
};

module.exports = { deleteContent, runProcess };
