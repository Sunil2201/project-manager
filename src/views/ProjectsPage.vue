<template>
  <div class="projects ml-2">
    <h1 class="subheading grey--text ml-2">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header> {{project.title}} </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
import {collection, onSnapshot } from "firebase/firestore";
export default {
  data(){
    return {
       projects: [],
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person == "The Net Ninja"
      })
    }
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
