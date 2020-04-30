<template>
  <q-page >
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
          <q-btn color="teal" :disable="loading" label="Tambah Data Makanan" to="/admin/inputdatamakanan"/>
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
          label: 'Kode Makanan',
          align: 'left',
          field: row => row.KodeMakanan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namamakanan', align: 'center', label: 'Nama Makanan', field: 'namamakanan', sortable: true },
        { name: 'hargamakanan', align: 'center', label: 'Harga Makanan', field: 'hargamakanan', sortable: true },
        { name: 'jumlahmakanan', label: 'Jumlah Makanan', align: 'center', field: 'jumlahmakanan' },
        { name: 'Tanggalbuatmakanan', label: 'Tanggal buat makanan', align: 'center', field: 'tanggalbuatmakanan' },
        { name: 'Tanggalexpayer', label: 'Tanggal Expayer', align: 'center', field: 'tanggalexpayer' }

      ],
      data: [
        {
          KodeMakanan: 'M001',
          namamakanan: 'Tekwan Lengkap 1 kg',
          hargamakanan: 'Rp.165.000',
          jumlahmakanan: '50 porsi',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M002',
          namamakanan: 'Otak-otak bakar',
          hargamakanan: 'Rp.200.000',
          jumlahmakanan: '1kg',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M003',
          namamakanan: 'Mie Celor siap saji',
          hargamakanan: 'Rp.170.000',
          jumlahmakanan: '30 porsi',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M004',
          namamakanan: 'Otak-otak goreng',
          hargamakanan: 'Rp.233.000',
          jumlahmakanan: '1 kg',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M005',
          namamakanan: 'Kapal Selam',
          hargamakanan: 'Rp.150.000',
          jumlahmakanan: '1 kg',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M006',
          namamakanan: 'Pempek mix complete',
          hargamakanan: 'Rp.250.000',
          jumlahmakanan: '50 porsi',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M007',
          namamakanan: 'Pempek lenjer',
          hargamakanan: 'Rp.105.000',
          jumlahmakanan: '1kg',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M008',
          namamakanan: 'Pempek Isi Complete',
          hargamakanan: 'Rp.216.000',
          jumlahmakanan: '50 porsi',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M009',
          namamakanan: 'Srikaya ketan',
          hargamakanan: 'Rp.100.000',
          jumlahmakanan: '1kg',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
        },
        {
          KodeMakanan: 'M0010',
          namamakanan: 'Burgo complet',
          hargamakanan: 'Rp.150.000',
          jumlahmakanan: '50 porsi',
          tanggalbuatmakanan: '22-2-2020',
          tanggalexpayer: '22-3-2020'
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
