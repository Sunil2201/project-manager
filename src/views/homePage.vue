<template>
  <div class="home ml-2">
    <h1>Homepage</h1>
    <v-btn depressed color="blue">click me</v-btn>
    <v-btn class="ml-2" flat color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text ml-2">
        <v-icon left>email</v-icon>
        <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text ml-2">
        <v-icon left small>email</v-icon>
        <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text ml-2">
        <span>email me</span>
        <v-icon right large>email</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {};
</script>
