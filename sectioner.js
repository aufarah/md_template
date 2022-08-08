function sectioner(){
    whole = document.body.childNodes
    sect_tag = ['TITLE','H1','H2','H3','H4','H5','H6']
    let num = 0
    let current_tag=''
    for (elem of whole) {
        tag_name = elem.tagName
        if (sect_tag.includes(tag_name)) {
            current_tag=tag_name
            num+=1
        }
        if (num>0){
            try{
                elem.setAttribute('class',current_tag.toLowerCase())
            } catch(err){}
        }
    console.log(tag_name)}
}