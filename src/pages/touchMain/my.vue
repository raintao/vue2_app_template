<template>
	<div class="my">
		<p>我的</p>
	</div>
</template>
<script>
	export default{
		name: 'my',
		data:function(){
			return{

			}
		},
		components:{

		},
		methods:{

		}
	}
</script>
<style lang='less' scoped>
	.my{
		>p{
			font-size: 30px;
			text-align: center;
			padding-top: 1rem;
		}
	}
</style>
