
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/datamakanan.vue') },
      { path: 'inputdatamakanan', component: () => import('pages/admin/home/inputdatamakanan.vue') },
      { path: 'inputdatatransaksi', component: () => import('pages//admin/home/inputdatatransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/pembelilayout.vue'),
    children: [
      { path: '', component: () => import('pages/pembeli/datamakanan/datamakanan.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/Transaksi/DataTransaksi') }]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
