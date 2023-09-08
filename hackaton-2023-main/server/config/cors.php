<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | Define here the allowed origins for CORS requests. The "*" wildcard
    | can be used to allow all origins to access your application.
    |
    */
    'allowed_origins' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Methods
    |--------------------------------------------------------------------------
    |
    | Define here the allowed HTTP methods for CORS requests. The "*" wildcard
    | can be used to allow all methods to access your application.
    |
    */
    'allowed_methods' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | Define here the allowed headers for CORS requests. The "*" wildcard
    | can be used to allow all headers to access your application.
    |
    */
    'allowed_headers' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | Define here the headers that are made accessible to the browser.
    |
    */
    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | Define here the max age of the CORS options request in seconds.
    |
    */
    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Supports Credentials
    |--------------------------------------------------------------------------
    |
    | Define here whether to allow credentials (cookies, authorization headers, etc)
    | to be included in CORS requests. Set this to `true` if your API supports
    | authentication or session handling.
    |
    */
    'supports_credentials' => false,
    
    'paths' => ['api/*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],

];
