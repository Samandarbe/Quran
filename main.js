inputElement.onkeyup=async(e)=>{
    if(e.keyCode==13){

        await div()
    
}
}

readAll.addEventListener('click',async(e)=>{
        await div()
        const audios = document.querySelectorAll('.audio')
        console.log(audios[0].play());
        audios.forEach((item, index) => {

            item.onpause = () => {
                
                
                if(item.currentTime == item.duration) {
        
        
                    if(audios[index+1]){
        
                          audios[index+1].play()}
        
                    }
        
                }   
        
            })

}

)


async function div(){
    let server=await fetch(`https://api.quran.sutanlab.id/surah/${inputElement.value}`)
    let tarjima=await fetch(`https://quranenc.com/api/translation/sura/uzbek_mansour/${inputElement.value}`)

    tarjima=await tarjima.json()
    console.log(tarjima.result);
            
            
    server=await server.json()
    
    
    
    if(server.code==200){
                        
        let {data,data:{verses}}=server
        let agent=0
        
        for(let el of verses){
            let a=el.audio. secondary[0]
            let b=el.text.arab



            let li =document.createElement('li')
            li.setAttribute('class','listLi')

            let h=document.createElement('h')
            h.textContent=b

            let h3=document.createElement('h3')
            h3.textContent=tarjima.result[agent]. translation



            
            let audio=document.createElement('audio')



            audio.setAttribute('class','audio')
            audio.src=a
            li.append(audio)
            li.append(h)
            li.append(h3)

            list.append(li)
            agent++
        }
        const li=document.querySelectorAll('.listLi')
        li.forEach((el,i)=>{
            el.addEventListener('click',()=>{
                li.forEach(el=>{
                    el.firstElementChild.pause()
                })

                el.firstElementChild.play()
                
            })
        })
        return list

}
}