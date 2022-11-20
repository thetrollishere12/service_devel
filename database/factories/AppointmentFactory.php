<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon;
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

    private function convertTimeToSecond(string $time): int
    {
        $d = explode(':', $time);
        return ($d[0] * 3600) + ($d[1] * 60) + $d[2];
    }

    public function definition()
    {
        $start_date = $this->faker->randomElement(['2022-11-22','2022-12-13','2022-11-14','2022-12-16','2022-12-08','2022-12-24','2022-11-17','2022-11-19','2022-11-28','2023-01-28','2023-02-24','2023-02-07'])." ".$this->faker->randomElement(['01:15:00','02:30:00','03:45:00','04:00:00','05:15:00','06:30:00','10:15:00','12:30:00','14:45:00','20:00:00','22:15:00','23:30:00']);

        $duration = $this->faker->randomElement(['00:15:00','00:30:00','00:45:00','01:00:00','01:15:00','01:30:00']);

        $minutes = Carbon\Carbon::createFromTimestampUTC($duration)->diffInMinutes();

        $time = Carbon\Carbon::createFromTimeString($duration);
        $start_of_day = Carbon\Carbon::createFromTimeString($duration)->startOfDay();
        $minutes = $time->diffInMinutes($start_of_day);

        $end_date = Carbon\Carbon::parse($start_date)->addMinutes($minutes);

        return [
            'store_id' => $this->faker->randomDigit(),
            'staff_id' => $this->faker->randomElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),
            'customer_id' => $this->faker->randomDigit(),
            'name' => $this->faker->randomElement(['Thom','Jane','Winston','Conor','Wang','Chang','Wilter'])." ".ucfirst($this->faker->word()),
            'service' => $this->faker->randomElement(['Haircut','Trim','Lash','Wash']),
            'start_date' => $start_date,
            'end_date' => $end_date,
            'duration' => $duration,
        ];
    }
}
