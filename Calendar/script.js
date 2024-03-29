var dt = new Date();
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            var months = [
                "Gerar",
                "Făurar",
                "Mărțișor",
                "Prier",
                "Florar",
                "Cireșar",
                "Cuptor",
                "Gustar",
                "Răpciune",
                "Brumărel",
                "Brumar",
                "Ningău"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()];
            document.getElementById("year").innerHTML = dt.getFullYear();
            var cells = "";
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            for (i = 1; i <= endDate; i++) {
                if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else
                    cells += "<div>" + i + "</div>";
            }
            document.getElementsByClassName("days")[0].innerHTML = cells;

        }

        function moveDate(clicked) {
            if(clicked == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(clicked == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }