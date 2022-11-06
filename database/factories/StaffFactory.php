<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Staff>
 */
class StaffFactory extends Factory
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
            'name' => 'Staff '.$this->faker->randomElement(['Thoms','Janes','Winstons','Conors','Wangs','Changs','Wilters'])." ".ucfirst($this->faker->word()),
            'role' => $this->faker->randomElement(['Barber','Stylist','Hairs','Brows']),
            'profile_photo_path' => null,
            'email' => $this->faker->freeEmail(),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
