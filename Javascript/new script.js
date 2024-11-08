let $ = document
let films = [
  {
      type: 'film',
      year: '1994',
      filmName: 'رستگاری در شاوشنک',
      personName: 'داش عباس',
      score: 9.3,
      src: '../semi-image/img1.png',
      href: '#'
  },
  {
      type: 'film',
      year: '1999',
      filmName: 'باشگاه مشت زنی',
      personName: 'داش عباس',
      score: 8.8,
      src: '../semi-image/img2.png',
      href: '#'
  },
  {
      type: 'film',
      year: '2001',
      filmName: 'ارباب حلقه‌ها',
      personName: 'داش عباس',
      score: 8.8,
      src: '../semi-image/img3.png',
      href: '#'
  },
  {
      type: 'film',
      year: '2003',
      filmName: 'بازگشت شاه',
      personName: 'داش عباس',
      score: 9.0,
      src: '../semi-image/img4.png',
      href: '#'
  },
  {
      type: 'film',
      year: '2010',
      filmName: 'تلقین',
      personName: 'داش عباس',
      score: 8.8,
      src: '../semi-image/img5.png',
      href: '#'
  },
  {
      type: 'film',
      year: '2014',
      filmName: 'بین ستاره‌ای',
      personName: 'داش عباس',
      score: 8.6,
      src: '../semi-image/img6.png',
      href: '#'
  },
  {
      type: 'film',
      year: '1994',
      filmName: 'داستان عامه‌پسند',
      personName: 'داش عباس',
      score: 8.9,
      src: '../semi-image/img7.png',
      href: '#'
  },
  {
      type: 'film',
      year: '1999',
      filmName: 'ماتریکس',
      personName: 'داش عباس',
      score: 8.7,
      src: '../semi-image/img8.png',
      href: '#'
  },
  {
    type : "series",
    year : "2011-2019",
    filmName : "بازی تاج و تخت",
    personName : "داش عباس",
    score : 9.3,
    src : '../semi-image/img9.png',
    href : '#'
  },
  {
    type : "series",
    year : "2016-2020",
    filmName : "چیزهای عجیب",
    personName : "داش عباس",
    score : 8.7,
    src : '../semi-image/img1.png',
    href : '#'
  },
  
  // تکرار برای 10 بار
  {
    type : "film",
    year : "1994",
    filmName : "رستگاری در شاوشنک",
    personName : "داش عباس",
    score : 9.3,
    src : "../semi-image/img2.png",
    href : '#'
  },
  {
    type : "film",
    year : "1999",
    filmName : "باشگاه مشت زنی",
    personName : "داش عباس",
    score : 8.8,
    src : "../semi-image/img3.png",
    href : '#'
  },
  {
    type : "film",
    year : "2001",
    filmName : "ارباب حلقه‌ها",
    personName : "داش عباس",
    score : 8.8,
    src : "../semi-image/img4.png",
    href : '#'
  },
  {
    type : "film",
    year : "2003",
    filmName : "بازگشت شاه",
    personName : "داش عباس",
    score : 9.0,
    src : "../semi-image/img5.png",
    href : '#'
  },
  {
    type : "film",
    year : "2010",
    filmName : "تلقین",
    personName : "داش عباس",
    score : 8.8,
    src : "../semi-image/img6.png",
    href : '#'
  },
  {
     type:'film', 
     year:'2014', 
     filmName:'بین ستاره‌ای', 
     personName:'داش عباس', 
     score:'8.6', 
     src:'../semi-image/img7.png', 
     href:'#' 
   },
   {
     type:'film', 
     year:'1994', 
     filmName:'داستان عامه‌پسند', 
     personName:'داش عباس', 
     score:'8.9', 
     src:'../semi-image/img8.png', 
     href:'#' 
   },
   {
     type:'film', 
     year:'1999', 
     filmName:'ماتریکس', 
     personName:'داش عباس', 
     score:'8.7', 
     src:'../semi-image/img9.png', 
     href:'#' 
   },
   {
     type:'series', 
     year:'2011-2019', 
     filmName:'بازی تاج و تخت', 
     personName:'داش عباس', 
     score:'9.3', 
     src:'../semi-image/img1.png', 
     href:'#' 
   },
   {
     type:'series', 
     year:'2016-2020', 
     filmName:'چیزهای عجیب', 
     personName:'داش عباس', 
     score:'8.7', 
     src:'../semi-image/img2.png', 
     href:'#' 
   },

   // ادامه تکرار
   {
       type :'film' ,  
       year :'1994' ,  
       filmName :'رستگاری در شاوشنک' ,  
       personName :'داش عباس' ,  
       score :'9.3' ,  
       src :'../semi-image/img3.png' ,  
       href :'#'  
   },  
   {  
       type :'film' ,  
       year :'1999' ,  
       filmName :'باشگاه مشت زنی' ,  
       personName :'داش عباس' ,  
       score :'8.8' ,  
       src :'../semi-image/img4.png' ,  
       href :'#'  
   },  
   {  
       type :'film' ,  
       year :'2001' ,  
       filmName :'ارباب حلقه‌ها' ,  
       personName :'داش عباس' ,  
       score :'8.8' ,  
       src :'../semi-image/img5.png' ,  
       href :'#'  
   },  
   {  
       type :'film' ,  
       year :'2003' ,  
       filmName :'بازگشت شاه' ,  
       personName :'داش عباس' ,  
       score :'9.0' ,  
       src :'../semi-image/img6.png' ,  
       href :'#'  
   },  
   {  
       type :'film' ,  
       year :'2010' ,  
       filmName :'تلقین' ,  
       personName :'داش عباس' ,  
       score :'8.8' ,  
       src :'../semi-image/img7.png' ,  
       href :'#'  
   },  

   {    
        type :'series' ,    
        year :'2011-2019' ,    
        filmName :'بازی تاج و تخت' ,    
        personName :'داش عباس' ,    
        score :'9.3' ,    
        src :'../semi-image/img8.png' ,    
        href :'#'    
   },    
   {    
        type :'series' ,    
        year :'2016-2020' ,    
        filmName :'چیزهای عجیب' ,    
        personName :'داش عباس' ,    
        score :'8.7' ,    
        src :'../semi-image/img9.png' ,    
        href :'#'    
   }   
];

let parent = $.querySelector('.search-content-items')
let searchInput = $.getElementById('searchInput')


// searchInput.addEventListener('keydown', function(event){
//   let inputValue = searchInput.value
  
//   if(event.keyCode === 13){

//     if(inputValue != false){
//       films.forEach(function(item){
//         let resultFilm = []
//         if(item.filmName.includes(inputValue)){
//           resultFilm.push(item)
//           resultFilm.forEach(function(filmItem){
//             console.log(filmItem.filmName);
//             parent.innerHTML = ''
//             let addedItem = createItem(item.type, item.year, item.filmName, item.score, item.personName, item.src, item.href)
//             parent.appendChild(addedItem)
//           })
//         }
//       })
//     }
//   }

  
// })


function createItem (type, year, filmName, score, personName, src, href){
    let filmItem = $.createElement('a')
    filmItem.setAttribute('href', href)
    filmItem.className = 'flex flex-col gap-3'

    let filmItemBody = $.createElement('div')
    filmItemBody.className = 'swiper-slide-item relative aspect-1/1470 group'
    filmItem.appendChild(filmItemBody)

    let filmItemImg = $.createElement('img')
    filmItemImg.src = src
    filmItemImg.className = 'w-full h-full object-cover rounded-md'
    filmItemImg.setAttribute('loading', 'lazy')
    filmItemBody.appendChild(filmItemImg)



    let filmItemCover = $.createElement('div')
    filmItemCover.className = 'poster-item-cover w-full h-full rounded-md opacity-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] from-0% to-[rgba(0,0,0,0.9)] to-100% flex flex-col items-start justify-end gap-2 px-[10px] py-[20px] transition-all duration-300 delay-1000 absolute z-[2] hover:opacity-100 top-0 left-0 md-max:hidden'
    filmItemBody.appendChild(filmItemCover)

    let filmItemCoverFilmData = $.createElement('p')
    filmItemCoverFilmData.className = 'text-light text-xs font-normal font-Farsi-FaNum-regular flex items-center gap-[4px]'
    
    let filmItemCoverFilmName = $.createElement('span')
    if (type === 'film'){
        filmItemCoverFilmName.textContent = 'فیلم'
        
    }else{
        filmItemCoverFilmName.textContent = 'سریال'

    }
    filmItemCoverFilmData.appendChild(filmItemCoverFilmName)
    filmItemCoverFilmData.append('-')

    let filmItemCoverFilmYear = $.createElement('span')
    filmItemCoverFilmYear.textContent = year
    filmItemCoverFilmData.appendChild(filmItemCoverFilmYear)
    filmItemCover.appendChild(filmItemCoverFilmData)

    let filmItemCoverFilmScore = $.createElement('p')
    filmItemCoverFilmScore.className = 'flex items-center gap-1'
    filmItemCover.appendChild(filmItemCoverFilmScore)

    let filmItemCoverFilmScoreSvg = `<svg class=" w-8 text-light" width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.208 5.56245C9.308 5.13845 9.33 4.73845 9.408 4.31445L9.53 3.34945L9.652 2.43145C9.67332 2.19457 9.70669 1.95893 9.752 1.72545L9.852 0.972447C9.902 0.737447 9.925 0.478447 9.952 0.242447C9.976 0.0304475 9.952 0.0304471 10.172 0.0304471H13.918C14.04 0.0304471 14.065 0.0544474 14.065 0.170447V11.7554C14.065 11.8494 14.041 11.8954 13.943 11.8954H11.583C11.461 11.8954 11.436 11.8714 11.436 11.7554V5.45545H11.412L11.142 6.91545L10.897 8.21045L10.677 9.50545L10.477 10.6354L10.257 11.8124C10.233 11.9064 10.207 11.9304 10.11 11.9304H8.448C8.398 11.9304 8.348 11.9304 8.348 11.8604L8.005 10.0234L7.638 8.13945L7.271 6.16145L7.124 5.43145V11.7884C7.124 11.9064 7.1 11.9534 6.977 11.9534H4.577C4.455 11.9534 4.43 11.9294 4.43 11.8134V0.217447C4.43 0.123447 4.454 0.0774475 4.552 0.0774475H8.005C8.078 0.0774475 8.127 0.0774474 8.152 0.171447L8.422 1.65445L8.716 3.25445L8.936 4.57445C9.07484 4.88928 9.16649 5.22287 9.208 5.56445V5.56245ZM15.496 5.86245V0.170447C15.496 0.0304474 15.546 0.00544748 15.666 0.00544748H19.608C20.1729 -0.0224967 20.7379 0.0572534 21.273 0.240447C21.73 0.395587 22.1362 0.672128 22.448 1.04045C22.6336 1.30835 22.7589 1.61338 22.815 1.93445C22.8679 2.32406 22.8843 2.71778 22.864 3.11045V9.46245C22.8739 9.74016 22.8194 10.0164 22.7047 10.2695C22.5901 10.5226 22.4183 10.7458 22.203 10.9214C21.8794 11.1737 21.5036 11.3507 21.103 11.4394C20.5593 11.5808 19.9998 11.652 19.438 11.6514L15.638 11.6754C15.516 11.6754 15.538 11.6054 15.538 11.5354L15.495 5.86545L15.496 5.86245ZM18.396 5.76845V9.62645C18.396 9.72045 18.42 9.74445 18.518 9.74445C18.706 9.74819 18.894 9.74018 19.081 9.72045C19.2264 9.70867 19.3614 9.64065 19.4574 9.53083C19.5534 9.42102 19.6028 9.27809 19.595 9.13245V2.35845C19.601 2.17545 19.495 2.00845 19.325 1.93545C19.0731 1.84852 18.8074 1.80853 18.541 1.81745C18.419 1.81745 18.394 1.84145 18.394 1.95745L18.396 5.76845ZM27.313 2.68845C27.7679 2.36533 28.2725 2.11875 28.807 1.95845C29.119 1.87546 29.4464 1.86847 29.7616 1.93807C30.0769 2.00766 30.3709 2.15182 30.619 2.35845C30.8061 2.49665 30.9571 2.67782 31.0595 2.88667C31.1618 3.09553 31.2124 3.32593 31.207 3.55845V10.5584C31.185 11.1534 30.743 11.6584 30.154 11.7354C29.7908 11.7975 29.4212 11.8133 29.054 11.7824C28.693 11.743 28.3389 11.6556 28.001 11.5224L27.144 11.2624C27.058 11.2364 26.964 11.2754 26.924 11.3564C26.854 11.4894 26.804 11.6324 26.777 11.7804C26.753 11.8504 26.727 11.8744 26.655 11.8744H24.221C24.148 11.8744 24.121 11.8504 24.121 11.8044V0.195447C24.121 0.0554471 24.146 0.0304471 24.291 0.0304471H27.091C27.261 0.0304471 27.261 0.0304473 27.261 0.218447L27.311 2.69045L27.313 2.68845ZM27.513 6.64345V9.72845C27.5084 9.83916 27.5439 9.94782 27.613 10.0344C27.695 10.1674 27.857 10.2344 28.005 10.1744C28.175 10.1274 28.225 10.0564 28.225 9.84445V3.74445C28.2304 3.66532 28.2223 3.58586 28.201 3.50945C28.155 3.32345 27.975 3.20145 27.785 3.22745C27.638 3.25145 27.515 3.29745 27.515 3.55745L27.513 6.64345ZM0.025 5.93845V0.170447C0.025 0.0524474 0.049 0.0304471 0.172 0.0304471H2.792C2.914 0.0304471 2.914 0.0544474 2.914 0.170447V11.7534C2.914 11.8714 2.89 11.8934 2.767 11.8934H0.147C0.025 11.8934 0 11.8694 0 11.7534L0.025 5.93845Z" fill="currentColor"/>
                                            </svg>`
    filmItemCoverFilmScore.innerHTML += filmItemCoverFilmScoreSvg

    let filmItemCoverFilmScoreText = $.createElement('span')
    filmItemCoverFilmScoreText.className = 'filmItemCoverFilmScore text-light text-xs font-normal font-Farsi-FaNum-regular'
    filmItemCoverFilmScoreText.textContent = score + '/10'
    filmItemCoverFilmScore.appendChild(filmItemCoverFilmScoreText)

    let filmItemCoverIcon = `<svg class=" w-12 absolute z-[3] top-0 right-0 left-0 bottom-0 m-auto opacity-0 group-hover:opacity-100 transition-all duration-200 delay-1000 md-max:hidden" width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5 14.1699C32.8333 16.0944 32.8333 20.9056 29.5 22.8301L7.74999 35.3875C4.41666 37.312 0.249998 34.9064 0.249998 31.0574L0.249998 5.94262C0.249998 2.09362 4.41667 -0.311997 7.75 1.6125L29.5 14.1699Z" fill="white"/>
                                </svg>`

    filmItemBody.innerHTML += filmItemCoverIcon


    let filmItemContent = $.createElement('div')
    filmItemContent.className = 'flex flex-col gap-1'
    filmItem.appendChild(filmItemContent)


    let filmItemContentTitle , filmItemContentSubtitle
    filmItemContentTitle = $.createElement('p')
    filmItemContentSubtitle = $.createElement('p')


    filmItemContentTitle.className = 'leading-[15.6px] font-Farsi-medium text-light text-xs'
    filmItemContentTitle.textContent = filmName
    filmItemContentSubtitle.className = 'leading-[15.6px] font-Farsi-regular text-black-200 text-xs'
    filmItemContentSubtitle.textContent = personName

    filmItemContent.appendChild(filmItemContentTitle)
    filmItemContent.appendChild(filmItemContentSubtitle)


    return filmItem
}

films.forEach(function(item){
    parent.appendChild(createItem(item.type, item.year, item.filmName, item.score, item.personName, item.src, item.href))
})






function accordion (toggle, target){
  let accordionToggle = $.getElementById(toggle)
  let accordionTarget = $.getElementById(target)
  let accordionFlag = false

  accordionToggle.addEventListener('click', function(){
    if(!accordionFlag){
      accordionFlag = true
      accordionTarget.classList.add('active')
      accordionToggle.classList.add('active')
    }else{
      accordionTarget.classList.remove('active')
      accordionFlag = false
      accordionToggle.classList.remove('active')
    }
  })
}


accordion('accordion-category-toggle', 'accordion-category-target')
accordion('accordion-sorting-toggle', 'accordion-sorting-target')
accordion('accordion-year-toggle', 'accordion-year-target')





// Login page scripts

