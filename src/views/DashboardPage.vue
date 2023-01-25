<template>
  <div class="dashboard ml-4">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-10">
      <v-row class="mb-3 ml-1">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              small
              text
              color="grey"
              @click="sortBy('title')"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              small
              text
              color="grey"
              @click="sortBy('person')"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card
        flat
        class="pa-3 mb-2"
        v-for="project in projects"
        :key="project.title"
      >
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs3 sm4 md2>
            <div class="float-right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-3`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
import {collection, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if(change.type === "added"){
          this.projects.push({
            ...change.doc.data(), 
            id: change.doc.id
          })
        }
      })
    })
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1cd;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1cd !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
