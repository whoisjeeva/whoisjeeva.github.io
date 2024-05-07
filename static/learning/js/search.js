let url = new URL(location.href);
let query = url.searchParams.get("q");
let coursesContainer = document.querySelector(".course-list")
let footer = document.querySelector("footer")


function insertCourse(course) {
    let div = document.createElement("div")
    div.setAttribute("class", "course-item card")
    div.innerHTML = `
    <a href="/learning/${course.slug}/" class="image">
        <img src="${ course.image }" alt="${ course.title }">
    </a>
    <div class="info">
        <h3>${ course.title }</h3>
        <br>
        <div class="controls">
            <a href="/learning/${ course.slug }/" class="btn btn-primary">View Course</a>
            <span class="spacer"></span>
            <a href="/learning/${ course.slug }/" class="material-icons">play_arrow</a>
        </div>
    </div>
    `
    coursesContainer.appendChild(div)
}


if (query) {
    query = query.toLowerCase()
    document.querySelector("#search-field").value = `${query}`
    let courses = PAGE_DATA.filter(course => course.title.toLowerCase().indexOf(query) > -1)
    if (courses.length == 0) {
        let nodes = query.split(" ")
        for (let node of nodes) {
            let parts = PAGE_DATA.filter(course => course.title.toLowerCase().indexOf(node) > -1)
            courses = courses.concat(parts)
        }
    }
    let index = 0
    let coursesPerPage = 6
    while(true) {
        if (index >= coursesPerPage || courses.length <= index) {
            break
        }
        let course = courses[index]
        insertCourse(course)
        index++
    }

    window.onscroll = function(ev) {
        let canLoad = false
        if (courses.length > coursesPerPage) {
            coursesPerPage += coursesPerPage
            canLoad = true
        }
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - footer.clientHeight) {
            if (canLoad) {
                console.log("Loading more courses...")
                while(true) {
                    if (index >= coursesPerPage || courses.length <= index) {
                        break
                    }
                    let course = courses[index]
                    insertCourse(course)
                    index++
                }
            }
        }
    };
}
