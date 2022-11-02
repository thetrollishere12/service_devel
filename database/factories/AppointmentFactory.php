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
            'date' => $this->faker->randomElement(['2022-11-22','2022-12-13','2022-11-14','2022-12-16','2022-12-08','2022-12-24','2022-11-17','2022-11-19','2022-11-28','2023-01-28','2023-02-24','2023-02-07'])." ".$this->faker->randomElement(['01:15:00','02:30:00','03:45:00','04:00:00','05:15:00','06:30:00','10:15:00','12:30:00','14:45:00','20:00:00','22:15:00','23:30:00']),
            'duration' => $this->faker->randomElement(['00:15:00','00:30:00','00:45:00','01:00:00','01:15:00','01:30:00']),
        ];
    }
}
