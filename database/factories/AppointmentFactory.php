<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'store_id' => $this->faker->randomDigit(),
            'staff_id' => $this->faker->randomElement([1, 2, 3, 4]),
            'customer_id' => $this->faker->randomDigit(),
            'name' => $this->faker->randomElement(['Thom','Jane','Winston','Conor']),
            'service' => $this->faker->randomElement(['Haircut','Trim','Lash','Wash']),
            'date' => $this->faker->dateTimeBetween('+1 week', '+8 week'),
            'duration' => $this->faker->randomElement(['00:15:00','00:30:00','00:45:00','01:00:00','01:15:00','01:30:00']),
        ];
    }
}
