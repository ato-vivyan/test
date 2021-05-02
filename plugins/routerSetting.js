export default async ({ app, store }) => {
  await app.router.afterEach((to, from) => {
    store.commit('menu/globalMenuClose');
  });
};
