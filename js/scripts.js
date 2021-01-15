$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const ageInput = $("input#age").val();
    const nameInput = $("input#name").val();
    const operatingSystemInput = $("input#operatingSystem").val();
    const whichEndInput = $("input#whichEnd").val();
    const experienceInput = $("input#experience").val();
    const troubleShootInput = $("input#troubleShoot").val();

    $(".age").text(ageInput);
    $(".name").text(nameInput);
    $(".operatingSystem").text(operatingSystemInput);
    $(".whichEnd").text(whichEndInput);
    $(".experience").text(experienceInput);
    $(".troubleShoot").text(troubleShootInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});