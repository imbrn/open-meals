class Api {
  fetchRelatedMeals(meal, quantity = 4) {
    return Promise.resolve(new Array(quantity));
  }
}

// Implementation handler (mostly for mocking purposes)
let implementation;

export const setImplementation = it => (implementation = it);
export const setImpl = it => setImplementation(it);
export const restoreImplementation = () => (implementation = null);
export const restoreImpl = () => restoreImplementation();

const implHandler = {
  get: function(target, prop) {
    if (implementation && prop in implementation) {
      return implementation[prop];
    } else {
      return target[prop];
    }
  }
};

export default new Proxy(new Api(), implHandler);
