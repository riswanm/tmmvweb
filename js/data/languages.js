var langValues = [];
var  applyTranslation = {};
(function ($) {
    langValues = [
        {id : "1" ,en: "Thalduwa Muslim Maha Vidyalaya", ta: "தல்துவ முஸ்லீம் மகா வித்யாலயா", si: "තල්දුව මුස්ලිම් මහා විද්‍යාලය"},
        {id: "2" , en: "", tm: "", sn: ""},
    ];

    applyTranslation = function(lang){
        langValues.forEach(k => {
            $("[data-key="+ k.id +"]").text(k[lang]);
        });
    }

    $(".langSwitch").click(
        function(){
            const selectedLang = this.attr('data-lang');
            if (selectedLang !== undefined){
                applyTranslation(selectedLang);
            }
        }
    )

    applyTranslation('ta');
})(jQuery);


