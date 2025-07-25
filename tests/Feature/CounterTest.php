<?php

use App\Models\Counter;
use Inertia\Testing\AssertableInertia as Assert;

test('home page displays hello world and counter', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->has('count')
        ->where('count', 0)
    );
});

test('counter can be incremented', function () {
    // Create initial counter
    Counter::create(['count' => 5]);

    $response = $this->post('/counter');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->where('count', 6)
    );

    // Verify database was updated
    $this->assertDatabaseHas('counters', ['count' => 6]);
});

test('counter is created if it does not exist', function () {
    // Ensure no counter exists
    Counter::query()->delete();

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->where('count', 0)
    );

    // Verify counter was created in database
    $this->assertDatabaseHas('counters', ['count' => 0]);
});

test('multiple increments work correctly', function () {
    $counter = Counter::create(['count' => 0]);

    // Increment 3 times
    $this->post('/counter');
    $this->post('/counter');
    $response = $this->post('/counter');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->where('count', 3)
    );

    $this->assertDatabaseHas('counters', ['count' => 3]);
});