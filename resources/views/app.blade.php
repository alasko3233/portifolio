<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <meta name="description" content="">
    <link rel="shortcut icon" href="{{ asset('assets/republogo.png') }}" />
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="{{ asset('assets/republogo.png') }}">
    <link rel="icon" type="image/png" sizes="180x180" href="{{ asset('assets/republogo.png') }}">
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="{{ asset('assets/republogo.png') }}">
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="{{ asset('assets/republogo.png') }}">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="{{ asset('assets/republogo.png') }}">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="{{ asset('assets/republogo.png') }}">
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
