document.addEventListener('DOMContentLoaded', function() {
  var skillBoxes = document.querySelectorAll('.skill-box');

  skillBoxes.forEach(function(box) {
    var skillBtn = box.querySelector('.skill-btn');
    var subSkills = box.querySelector('.sub-skills');

    skillBtn.addEventListener('mouseenter', function() {
      subSkills.style.display = 'block';
    });

    box.addEventListener('mouseleave', function() {
      subSkills.style.display = 'none';
    });
  });
});