<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Makanan</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >

          <q-input
            label="Kode Barang"
            lazy-rules
            color="teal"
            v-model="kodemakanan"
            :rules="[
           val => val !== null && val !== '' || 'Kode Makanan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="code"/>
            </template>
          </q-input>
          <q-input
            label="Nama makakanan"
            lazy-rules
            color="teal"
            v-model="namamakanan"
            :rules="[
           val => val !== null && val !== '' || 'Nama Makanan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="list"/>
            </template>
          </q-input>
          <q-input
            label="Harga Makanan"
            lazy-rules
            color="teal"
            v-model="hargamakanan"
            :rules="[
           val => val !== null && val !== '' || 'harga Makanan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-input
            label="Jumlah Makanan"
            lazy-rules
            color="teal"
            v-model="jumlahmakanan"
            :rules="[
           val => val !== null && val !== '' || 'jumlah Makanan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_box"/>
            </template>
          </q-input>
          <q-input
            label="Tanggal Buat Makanan"
            lazy-rules
            color="teal"
            v-model="tanggalbuatmakanan"
            :rules="[
           val => val !== null && val !== '' || 'tanggal buat makanan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>
          <q-input
            label="Tanggal Expayer"
            lazy-rules
            color="teal"
            v-model="tanggalexpayer"
            :rules="[
           val => val !== null && val !== '' || 'tanggal expayer Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Makanan"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      namamakanan: null,
      kodemakanan: null,
      hargamakanan: null,
      jumlahmakanan: null,
      tanggalbuatmakanan: null,
      tanggalexpayer: null

    }
  }
}
</script>

<style scoped>

</style>
