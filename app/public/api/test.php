<?php

// Every variable begins with a $
$num = 2;
$foo = "To Be";
$bar =" or not to be. ";

// Echo statement is like print (Print would work as well)
// I "." represents a plus sign
echo $foo . $bar;

// "\n" means a new line however the code gets interpted as html and just moves the code onto the next line but not <p> break or <br> tag
echo "\n";

echo $num * $num * $num;

$arr = [1,1,2,3,5,8];

$arr2 = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
    ];

if (true) {
    echo "True \n";
} else {
    echo "False \n";
}

while (true) {
    break;
}

echo "<ul>";
foreach ($arr2 as $key => $val) {
    echo "<li>".$key." is ".$val."</li>\n";
}
echo "</ul>";

// $arr as json
echo json_encode($arr);
echo json_encode(
    $arr2,
    JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);

// variable naming: 
// PHP and JS = camelCase 
// Constants : UPPER_SNAKE_CASE
// snake_case
// PascalCase (We'll use for class names)
// kebab-case