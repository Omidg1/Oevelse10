<script lang="ts">
	let stressValue = 1;

	const exercises = {
		1: {
			fysisk: ['Strække arme og nakke', '5 minutters gåtur'],
			ikkeFysisk: ['2 minutters dyb vejrtrækning', 'Skriv 3 ting du er taknemmelig for']
		},
		2: {
			fysisk: ['Let yoga', '10 minutters gåtur i naturen'],
			ikkeFysisk: ['Kort mindfulness', 'Journalskrivning: Hvordan har jeg det?']
		},
		3: {
			fysisk: ['15 minutters cykeltur', 'Hele-krops stræk'],
			ikkeFysisk: ['5-10 min guidet meditation', 'Visualisering af et trygt sted']
		},
		4: {
			fysisk: ['Pilates eller slow yoga', 'Mindful walking'],
			ikkeFysisk: ['Tal med en ven', 'Skriv et bekymringsbrev']
		},
		5: {
			fysisk: ['20 minutters rolig træning', 'Tai Chi eller Qi Gong'],
			ikkeFysisk: ['Refleksionsskrivning', 'Digital detox i 1 time']
		},
		6: {
			fysisk: ['Moderate aktiviteter: løb, dans, svømning', 'Stræk og åndedræt'],
			ikkeFysisk: ['Planlæg dine grænser', 'Guidet meditation mod overvældelse']
		},
		7: {
			fysisk: ['Intervaller med puls', 'Progressiv muskelafslapning'],
			ikkeFysisk: ['Tal med en coach/vejleder', 'Sig nej til én ting i dag']
		},
		8: {
			fysisk: ['Yin yoga', 'Grounding – gå barfodet'],
			ikkeFysisk: ['Lav dagsstruktur', 'Lav en personlig kriseplan']
		},
		9: {
			fysisk: ['Langsom gåtur uden mål', 'Brug af tyngdetæppe'],
			ikkeFysisk: ['Aflys ting', 'Ring til en støtteperson']
		},
		10: {
			fysisk: ['Lig og hvil med varme', 'Ingen motion – kun ro'],
			ikkeFysisk: ['Find et roligt sted', 'Kun fokus på vejrtrækning']
		}
	};
</script>

<div
	class="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 px-4 pt-12 text-center font-sans text-white"
>
	<div class="mx-auto max-w-6xl">
		<h1 class="text-4xl font-bold">Pausepunktet</h1>
		<p class="mt-2 text-lg">
			Velkommen til Pausepunktet - din portal til bedre stresshåndtering og mental sundhed.
		</p>

		<div class="mt-10 flex flex-col justify-between gap-8 lg:flex-row">
			<!-- Dagbog -->
			<div class="flex-1 rounded-2xl bg-blue-800 p-6 shadow-lg">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-xl font-semibold">I dag – skriv dagbog</h2>
					<button class="btn btn-sm btn-outline btn-info">Se tidligere dagbog</button>
				</div>
				<textarea
					placeholder="Skriv dine tanker her..."
					class="h-48 w-full resize-none rounded-xl bg-white p-4 text-black"
				></textarea>
				<button class="btn btn-primary mt-4">Gem</button>
			</div>

			<!-- Stressniveau -->
			<div class="flex-1 rounded-2xl bg-blue-800 p-6 shadow-lg">
				<h2 class="mb-4 text-xl font-semibold">Hvor stresset er du i dag?</h2>
				<div class="flex items-center space-x-4">
					<span>1</span>
					<input
						type="range"
						min="1"
						max="10"
						bind:value={stressValue}
						class="range range-info flex-1"
					/>
					<span>10</span>
				</div>
				<p class="mt-4 text-lg">Valgt niveau: <span>{stressValue}</span></p>

				<!-- Øvelsesoutput -->
				{#if exercises[stressValue]}
					<div class="mt-6 rounded-xl bg-blue-900 p-4 text-left text-sm shadow">
						<h3 class="mb-2 text-lg font-semibold">Øvelser til niveau {stressValue}</h3>

						<p class="font-medium">Fysiske øvelser:</p>
						<ul class="mb-2 list-inside list-disc">
							{#each exercises[stressValue].fysisk as øvelse}
								<li>{øvelse}</li>
							{/each}
						</ul>

						<p class="font-medium">Ikke-fysiske øvelser:</p>
						<ul class="list-inside list-disc">
							{#each exercises[stressValue].ikkeFysisk as øvelse}
								<li>{øvelse}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>

		<!-- Gode råd -->
		<section class="mx-auto mt-12 max-w-3xl rounded-2xl bg-blue-800 p-6 text-left shadow-lg">
			<h2 class="mb-4 text-center text-xl font-semibold">Gode råd mod stress generelt</h2>
			<ul class="list-inside list-disc space-y-1">
				<li>Undgå kaffe og alkohol</li>
				<li>Tag en pause fra TV og mobil</li>
				<li>Hold fast i sengetiderne</li>
				<li>Pas på med hård motion</li>
				<li>Sørg for pauser hver time</li>
				<li>Giv dig selv alenetid</li>
				<li>Søg hjælp fra en stress coach</li>
				<li>Giv slip på det perfekte</li>
				<li>Find ud af hvad der stresser</li>
			</ul>
		</section>

		<!-- Footer -->
		<footer class="mt-16 text-center text-sm">
			<p>&copy; 2025 Telemedicinsk Stress Håndtering</p>
			<p>Alle rettigheder forbeholdes.</p>
			<nav class="mt-2">
				<a href="#about" class="link link-info underline">Om os</a> |
				<a href="#contact" class="link link-info underline">Kontakt</a> |
				<a href="#privacy" class="link link-info underline">Privatlivspolitik</a>
			</nav>
		</footer>
	</div>
</div>
