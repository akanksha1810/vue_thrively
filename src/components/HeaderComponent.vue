<template>
	<div class="header">
		<div class="header-container">
			<img class="logo" src="../assets/images/logo.png">
			<ul class="header-left-block">
				<li>Dashboard</li>
				<li>Discover
					<i class="fa fa-down-open-big"></i>
					<div>
						<a v-for="topics in discover_topics" :href="topics.url_identifier">{{topics.name}}</a>
					</div>
				</li>
				<li>Shop</li>
			</ul>
			<div class="search">
				<input placeholder="Search"><i class="fa fa-search"></i>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript" src="./../assets/js/header.js"></script>