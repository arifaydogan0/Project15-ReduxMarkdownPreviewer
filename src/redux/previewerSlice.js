import { createSlice } from "@reduxjs/toolkit";

export const previewerSlice = createSlice({
    name: "previewer",
    initialState: {
        // markdownText: localStorage.getItem("markdownText") ? JSON.parse(localStorage.getItem("markdownText")) : "",
        markdownText:"",
        buttonText: `# HEADING
Heading
=======

Sub-heading
----------- 

A paragraph with *emphasis* and **strong importance**. 
> A block quote with ~strikethrough~ and a URL: https://reactjs.org. 
Text attributes *italic*, **bold**, ~~strikethrough~~ .
        
* Lists:
* [ ] todo 
* [x] done 
               
A table:
| a | b |
| - | - |
       
Shopping list-1:

* apples
* oranges
* pears

Numbered list-2:

1. apples
2. oranges
3. pears

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    },
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
            // localStorage.setItem("markdownText", JSON.stringify(state.markdownText));
        },
        setButtonText: (state) => {
            state.markdownText === state.buttonText ? (state.markdownText = "") : (state.markdownText = state.buttonText);
        },
    },
});

export const { setMarkdownText , setButtonText } = previewerSlice.actions;
export default previewerSlice.reducer;
