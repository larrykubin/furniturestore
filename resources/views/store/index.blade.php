@extends('layouts.main')

@section('styles')
<style>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
@endsection

@section('content')
<h1>my store</h1>

<div>
    <select id="category">
        <option value="chair" selected="selected">Chair</option>
        <option value="lamp">Lamp</option>
        <option value="table">Table</option>
    </select>
</div>

<div class="album py-5 bg-light">
    <div class="container">
        <div class="row" id="products">
            
        </div>
    </div>
</div>
@endsection