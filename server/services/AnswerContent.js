// eslint-disable-next-line import/prefer-default-export
export class Content {
  // eslint-disable-next-line class-methods-use-this
  Create(state, nof, titleTag, imageTag, contentTag, actionTag) {
    return {
      state,
      content: {
        answer: nof,
        tags: {
          title: titleTag,
          content: contentTag,
          image: imageTag,
        },
        action: actionTag,
      },
    };
  }
}
