<?php

header('Content-type: application/json');

http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'You\'re reading The NGINX Handbook!',
]);