<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Transaksi</span>
      </span>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.KodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'namamakanan', align: 'center', label: 'Nama Makanan', field: 'namamakanan', sortable: true },
        { name: 'hargamakanan', label: 'Harga Makanan', align: 'center', field: 'hargamakanan' },
        { name: 'jumlahmakanan', label: 'Jumlah Makanan', align: 'center', field: 'jumlahmakanan' },
        { name: 'Total', label: 'Total', align: 'center', field: 'total' }

      ],
      data: [
        {
          KodeTransaksi: 'M001',
          namapembeli: 'sasi',
          namamakanan: 'Pempek lenjer',
          hargamakanan: 'Rp.105.000',
          jumlahmakanan: '1kg',
          total: 'Rp.105.000'
        },
        {
          KodeTransaksi: 'M002',
          namapembeli: 'arf',
          namamakanan: 'Srikaya Ketan',
          hargamakanan: 'Rp.100.000',
          jumlahmakanan: '2kg',
          total: 'Rp.200.0000'
        },
        {
          KodeTransaksi: 'M003',
          namapembeli: 'imf',
          namamakanan: 'Burgo Complete',
          hargamakanan: 'Rp.150.000',
          jumlahmakanan: '150 porsi',
          total: 'Rp 450.000'
        },
        {
          KodeTransaksi: 'M004',
          namapembeli: 'fdl',
          namamakanan: 'Pempek mix Complete',
          hargamakanan: 'Rp.216.000',
          jumlahmakanan: '50 porsi',
          total: 'Rp 216.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
