<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$apiUrl = 'https://ciisa.coningenio.cl/v1/services/'; 

$options = [
    "http" => [
        "header"  => "Authorization: Bearer ciisa" 
    ]
    ];
$context  = stream_context_create($options);
$response = @file_get_contents($apiUrl, false, $context);    

if($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error"=> "Error en la conexión a la API"]);
    exit;
}

echo $response;
?>