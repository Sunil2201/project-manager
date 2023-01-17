<template>
  <div class="dashboard ml-2">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5"> 
      <v-row wrap>
          <v-flex xs12 md6>
            <v-btn outline block class="primary my-1">1</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="primary my-1">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="primary my-1">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="primary my-1">2</v-btn>
          </v-flex>
      </v-row> 
      <v-row wrap class="justify-space-around">
        <v-flex xs4 md3>
          <v-btn outline block class="success my-1">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success my-1">2</v-btn>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
