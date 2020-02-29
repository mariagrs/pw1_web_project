<template>
  <v-card
  height="100%"
  width="100%"
  >
  <v-toolbar dense>

      <v-toolbar-title>Editeur d'exercice</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-row>
      <v-col>
       <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="5">
                <v-text-field
                  label="Calcul du nombre d'occurences"
                  single-line
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  :items="items"
                ></v-select>
              </v-col>

              <v-btn class="ma-6" color="blue" dark>
                <v-icon dark>mdi-content-save</v-icon>
              </v-btn>
            </v-row>
            <div>
              <p class="font-weight-bold headline">Consignes</p>
            </div>
            <v-col cols="12" md="10">
              <v-textarea
                solo
                name="input-7-4"
              ></v-textarea>
            </v-col>
            <div>
              <p class="font-weight-bold headline">Template de résolution</p>
            </div>
            <v-col cols="12" md="10">
              <v-textarea
                solo
                name="input-7-4"
              ></v-textarea>
            </v-col>
          </v-container>
        </v-form>
      </v-col>

      <v-col>
        <div>
          <p class="font-weight-bold headline">Test</p>
        </div>
        <div id="editor" class="exercise-editor-ace-editor"></div>
        <br>
        <v-row>
          <div>
            <p class="font-weight-bold headline">Sandbox</p>
          </div>
          <v-btn small color="blue" dark>
            <v-icon dark>mdi-play</v-icon>
          </v-btn>
        </v-row>
        <div>
          <p class="font-weight-bold headline">Résultats des tests</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/webpack-resolver'

export default {
  data: () => ({
    items: ['Pyhton', 'C++', 'Java', 'C'],
    editor: null
  }),
  mounted () {
    this.editor = ace.edit('editor')
    this.editor.setTheme('ace/theme/monokai')
    this.editor.session.setMode(`ace/mode/${this.lang}`)
  }

}
</script>

<style>
.exercise-editor-ace-editor {
 position: relative;
 height: 20rem;
}
</style>
